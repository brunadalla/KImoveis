import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"

import { Category } from "../../entities/category.entity"
import { Property } from "../../entities/property.entity"
import { IPropertyRequest } from "../../interfaces/properties"
import { Address } from "../../entities/address.entity"

const createPropertyService = async ({ value, size, address, categoryId }: IPropertyRequest): Promise<Property> => {
  const propertyRepository = AppDataSource.getRepository(Property)

  const propertyAlreadyExists = await propertyRepository.findOne({
    where: {
      address,
    },
  })

  if (propertyAlreadyExists) {
    throw new AppError("Property already exists!", 400)
  }

  const { district, zipCode, number, city, state } = address

  if (state.length > 2) {
    throw new AppError("State name too long!", 400)
  }

  if (zipCode.length > 8) {
    throw new AppError("Zipcode too long!", 400)
  }

  const categoryRepository = AppDataSource.getRepository(Category)
  const category = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
  })

  if (!category) {
    throw new AppError("Category does not exist", 404)
  }

  const addressRepository = AppDataSource.getRepository(Address)
  const newAddress = addressRepository.create({
    district, 
    zipCode, 
    number, 
    city, 
    state
  })

  await addressRepository.save(newAddress)

  const newproperty = propertyRepository.create({
    value,
    size,
    address: newAddress,
    category: category!,
  })

  await propertyRepository.save(newproperty)

  return newproperty
}

export default createPropertyService
