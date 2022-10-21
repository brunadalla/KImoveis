import { Request, Response } from "express"

import { IScheduleRequest } from "../../interfaces/schedules"
import createScheduleService from "../../services/schedules/createSchedule.service"

const createScheduleController = async (req: Request, res: Response) => {
  const data: IScheduleRequest =  req.body
  const schedule = await createScheduleService(data)

  return res.status(201).json({
    message: `Schedule created at ${schedule.date}`
  })
}

export default createScheduleController