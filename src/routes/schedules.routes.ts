import { Router } from "express"

import ensureAuthMiddleware from "../middleware/ensureAuth.middleware"
import ensureIsAdmMiddleware from "../middleware/ensureIsAdm.middleware"

import createScheduleController from "../controllers/schedules/createSchedule.controller"
import listSchedulesByPropertyController from "../controllers/schedules/listSchedulesByProperty.controller"

const routes = Router()

export const schedulesRouter = () => {

  routes.post("/", ensureAuthMiddleware, createScheduleController)
  routes.get("/properties/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, listSchedulesByPropertyController)

  return routes
}