import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"

import { Category } from "../../entities/category.entity"
import { Property } from "../../entities/property.entity"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async ({ value, size, address, categoryId }: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property)

  const propertyAlreadyExists = await propertyRepository.findOne({
    where: {
      address,
    },
  })

  if (propertyAlreadyExists) {
    throw new AppError("property already exists", 401)
  }

  const { state, zipCode } = address

  if (state.length > 2) {
    throw new AppError("state name too long", 401)
  }

  if (zipCode.length > 8) {
    throw new AppError("zipcode too long", 401)
  }

  const categoryRepository = AppDataSource.getRepository(Category)

  const category = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
  })

  const newproperty = propertyRepository.create({
    value,
    size,
    address,
    category: category!,
  })

  await propertyRepository.save(newproperty)

  return newproperty
}

export default createPropertyService
