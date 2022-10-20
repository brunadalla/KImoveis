import express from "express"
import "express-async-errors"
import "reflect-metadata"

import { appRoutes } from "./routes"
import handleErrorMiddleware from "./middleware/handleError.middleware"

const app = express()
app.use(express.json())

appRoutes(app)
app.use(handleErrorMiddleware)

export default app
