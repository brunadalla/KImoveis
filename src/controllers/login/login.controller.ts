import { Request, Response } from "express"

import loginService from "../../services/login/login.service"

const loginController = async (req: Request, res: Response) => {
  const data = req.body
  const token = await loginService(data)

  return res.json({ token })
}

export default loginController
