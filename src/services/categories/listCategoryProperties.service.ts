import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"

import { Category } from "../../entities/category.entity"

const listCategoryPropertiesService = async (id: string): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const category = await categoryRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  })

  if (!category) {
    throw new AppError("Category does not exist!", 404)
  }

  return category
}

export default listCategoryPropertiesService
