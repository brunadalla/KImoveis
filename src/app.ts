import express from "express"
import "express-async-errors"
import "reflect-metadata"

import usersRoutes from "./routes/users"
import loginRouter from "./routes/login"
import handleErrorMiddleware from "./middleware/handleError.middleware"

const app = express()
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/login", loginRouter)
app.use(handleErrorMiddleware)

export default app
