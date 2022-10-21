import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"

import { Category } from "../../entities/category.entity"
import { ICategoryRequest } from "../../interfaces/categories"

const createCategoryService = async ({ name }: ICategoryRequest): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const categoryAlreadyExists = await categoryRepository.findOne({
    where: {
      name,
    },
  })

  if (categoryAlreadyExists) {
    throw new AppError("Category already exists!", 400)
  }

  const newCategory = categoryRepository.create({
    name,
  })

  await categoryRepository.save(newCategory)

  return newCategory
}

export default createCategoryService
