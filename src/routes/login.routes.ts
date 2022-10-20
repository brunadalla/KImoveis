import { Router } from "express"

import loginController from "../controllers/login/login.controller"

const routes = Router()

export const loginRouter = () => {
  routes.post("/", loginController)

  return routes
}
