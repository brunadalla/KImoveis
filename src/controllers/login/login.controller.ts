import { Request, Response } from "express"

import { IUserLogin } from "../../interfaces/users"
import loginService from "../../services/login/login.service"

const loginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body
  const token = await loginService(data)

  return res.json({ token })
}

export default loginController
