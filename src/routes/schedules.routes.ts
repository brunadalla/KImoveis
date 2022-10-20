import { Router } from "express"

import createScheduleController from "../controllers/schedules/createSchedule.controller"
import listSchedulesByPropertyController from "../controllers/schedules/listSchedulesByProperty.controller"
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware"
import ensureIsAdmMiddleware from "../middleware/ensureIsAdm.middleware"

const routes = Router()

export const schedulesRouter = () => {

  routes.post("/", createScheduleController)
  routes.get("/properties/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, listSchedulesByPropertyController)

  return routes
}