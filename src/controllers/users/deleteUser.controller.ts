import { Request, Response } from "express"

import deleteUserService from "../../services/users/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
  const id = req.params.id
  const deletedUser = await deleteUserService(id)

  return res.status(deletedUser[1] as number).json({
    message: deletedUser[0],
  })
}

export default deleteUserController
