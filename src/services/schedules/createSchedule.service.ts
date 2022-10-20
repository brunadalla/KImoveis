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

  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      schedules: true,
    },
  })

  const dateMiliseconds = Date.parse(date) + Date.parse(hour)
  const scheduleDate = new Date(dateMiliseconds)
  const dateHours = scheduleDate.getHours()
  const dateDay = scheduleDate.getDay()

  const scheduleAlreadyExists = property!.schedules.find(
    (schedule) =>
      schedule.date.getDay() == dateDay && schedule.date.getHours() == dateHours
  )

  if (scheduleAlreadyExists) {
    throw new AppError("schedule already exists", 401)
  }

  if (dateHours < 8 || dateHours > 18) {
    throw new AppError("visits are not allowed before 8 am or after 6 pm", 401)
  }

  if (dateDay === 0 || dateDay === 6) {
    throw new AppError("visits are not allowed on these days: Sunday and Saturday", 401)
  }

  const newSchedule = scheduleRepository.create({
    date,
    hour,
    user: user!,
    property: property!,
  })

  await scheduleRepository.save(newSchedule)

  return newSchedule
}

export default createScheduleService
