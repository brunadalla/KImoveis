import { Router } from "express"

import ensureAuthMiddleware from "../middleware/ensureAuth.middleware"
import ensureIsAdmMiddleware from "../middleware/ensureIsAdm.middleware"

import createPropertyController from "../controllers/properties/createProperty.controller"
import listPropertiesController from "../controllers/properties/listProperties.controller"

const routes = Router()

export const propertiesRouter = () => {
  routes.post("/", ensureAuthMiddleware, ensureIsAdmMiddleware, createPropertyController)
  routes.get("/", listPropertiesController)

  return routes
}
