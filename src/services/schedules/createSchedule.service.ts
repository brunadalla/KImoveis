import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"

import { IScheduleRequest } from "../../interfaces/schedules"

import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedule.entity"
import { User } from "../../entities/user.entity"

const createScheduleService = async ({ date, hour, propertyId, userId }: IScheduleRequest): Promise<Schedule> => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)

  const propertyRepository = AppDataSource.getRepository(Property)
  const property = await propertyRepository.findOne({
    where: {
      id: propertyId,
    },
    relations: {
      schedules: true,
    },
  })

  if (!property) {
    throw new AppError("Property does not exist!", 404)
  }

  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      schedules: true,
    },
  })

  const scheduleDate = new Date(
    +date.split("/")[0],
    +date.split("/")[1] - 1,
    +date.split("/")[2],
    +hour.split(":")[0],
    +hour.split(":")[1]
  )

  const dateHours = (scheduleDate.getHours() * 3600 * 1000) + (scheduleDate.getMinutes() * 60 * 1000)

  const dateDay = scheduleDate.getDay()

  const scheduleAlreadyExists = property.schedules.find(
    (schedule) =>
      schedule.date.getDay() === dateDay &&
      (schedule.date.getHours() * 3600 * 1000) + (schedule.date.getMinutes() * 60 * 1000) === dateHours
  )

  if (scheduleAlreadyExists) {
    throw new AppError("Schedule already exists!", 400)
  }

  if (dateHours < (8 * 3600 * 1000) || dateHours > (18 * 3600 * 1000)) {
    throw new AppError("Visits are not allowed before 8 am or after 6 pm.", 400)
  }

  if (dateDay === 0 || dateDay === 6) {
    throw new AppError( "Visits are not allowed on these days: Saturday and Sunday.", 400)
  }

  const newSchedule = scheduleRepository.create({
    date: scheduleDate,
    hour,
    user: user!,
    property: property,
  })

  await scheduleRepository.save(newSchedule)

  return newSchedule
}

export default createScheduleService
