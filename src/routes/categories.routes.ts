import { Router } from "express"

import ensureAuthMiddleware from "../middleware/ensureAuth.middleware"
import ensureIsAdmMiddleware from "../middleware/ensureIsAdm.middleware"

import createCategoryController from "../controllers/categories/createCategory.controller"
import listCategoriesController from "../controllers/categories/listCategories.controller"
import listCategoryPropertiesController from "../controllers/categories/listCategoryProperties.controller"

const routes = Router()

export const categoriesRouter = () => {
  routes.post("/", ensureAuthMiddleware, ensureIsAdmMiddleware, createCategoryController)
  routes.get("/", listCategoriesController)
  routes.get("/:id/properties", listCategoryPropertiesController)

  return routes
}