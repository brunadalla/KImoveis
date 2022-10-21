import { Request, Response } from "express"

import createPropertyService from "../../services/properties/createProperty.service"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyController = async (req: Request, res: Response) => {
  const data: IPropertyRequest = req.body
  const property = await createPropertyService(data)

  return res.status(201).json(property)
}

export default createPropertyController
