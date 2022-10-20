import { Express } from "express"

import { categoriesRouter } from "./categories.routes"
import { loginRouter } from "./login.routes"
import { propertiesRouter } from "./properties.routes"
import { schedulesRouter } from "./schedules.routes"
import { usersRouter } from "./users.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouter())
  app.use("/login", loginRouter())
  app.use("/categories", categoriesRouter())
  app.use("/properties", propertiesRouter())
  app.use("/schedules", schedulesRouter())
}
