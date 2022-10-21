import { Request, Response } from "express"

import listSchedulesByPropertyService from "../../services/schedules/listSchedulesByProperty.service"

const listSchedulesByPropertyController = async ( req: Request, res: Response ) => {
  const id = req.params.id
  const schedules = await listSchedulesByPropertyService(id)
  
  return res.json(schedules)
}

export default listSchedulesByPropertyController