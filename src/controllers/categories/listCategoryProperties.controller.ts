import { Request, Response } from "express"

import listCategoryPropertiesService from "../../services/categories/listCategoryProperties.service"

const listCategoryPropertiesController = async ( req: Request, res: Response ) => {
  const id = req.params.id
  const properties = await listCategoryPropertiesService(id)
  
  return res.json(properties)
}

export default listCategoryPropertiesController
