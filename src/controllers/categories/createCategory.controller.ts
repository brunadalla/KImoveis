import { Request, Response } from "express"

import createCategoryService from "../../services/categories/createCategory.service"

const createCategoryController = async (req: Request, res: Response) => {
  const data = req.body
  const category = await createCategoryService(data)

  return res.status(201).json(category)
}

export default createCategoryController
