import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Property } from "../../entities/property.entity"

const listSchedulesByPropertyService = async ( id: string ): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property)

  const property = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: true,
    }
  })

  if (!property) {
    throw new AppError("Property does not exist!", 404)
  }
  console.log(property)

  return property
}

export default listSchedulesByPropertyService
