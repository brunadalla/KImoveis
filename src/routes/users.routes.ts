import { Router } from "express"

import ensureAuthMiddleware from "../middleware/ensureAuth.middleware"
import ensureIsAdmMiddleware from "../middleware/ensureIsAdm.middleware"

import createUserController from "../controllers/users/createUser.controller"
import deleteUserController from "../controllers/users/deleteUser.controller"
import editUserController from "../controllers/users/editUser.controller"
import listUsersController from "../controllers/users/listUsers.controller"

const routes = Router()

export const usersRouter = () => {
  routes.post("/", createUserController)
  routes.get( "/", ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController
  )
  routes.patch("/:id", ensureAuthMiddleware, editUserController)
  routes.delete( "/:id", ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController
  )

  return routes
}
