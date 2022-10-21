import { Express } from "express"

import { usersRouter } from "./users.routes"
import { loginRouter } from "./login.routes"
import { categoriesRouter } from "./categories.routes"
import { propertiesRouter } from "./properties.routes"
import { schedulesRouter } from "./schedules.routes"

export const appRoutes = (app: Express) => {
  app.use("/users", usersRouter())
  app.use("/login", loginRouter())
  app.use("/categories", categoriesRouter())
  app.use("/properties", propertiesRouter())
  app.use("/schedules", schedulesRouter())
}
