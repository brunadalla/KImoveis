import AppDataSource from "../../data-source"

import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedule.entity"

const listSchedulesByPropertyService = async ( id: string ): Promise<Schedule[]> => {
  const propertyRepository = AppDataSource.getRepository(Property)

  const property = await propertyRepository.findOne({
    where: {
      id,
    },
  })

  return property?.schedules!
}

export default listSchedulesByPropertyService
