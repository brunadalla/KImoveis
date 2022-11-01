import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"

import editUserService from "../../services/users/editUser.service"

const editUserController = async (req: Request, res: Response) => {
  const data = req.body
  const userId = req.user.id
  const idToUpdate = req.params.id

  const updatedUser = await editUserService(data, userId, idToUpdate)

  return res.json(instanceToPlain(updatedUser))
}

export default editUserController
