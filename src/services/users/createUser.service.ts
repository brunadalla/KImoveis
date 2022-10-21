import { hash } from "bcrypt"

import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/users"
import { User } from "../../entities/user.entity"

const createUserService = async ({ name, email, password, isAdm }: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)

  const hashedPassword = await hash(password, 10)

  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email: email,
    },
  })

  if (emailAlreadyExists) {
    throw new AppError('email already being used', 400)
  }

  const newUser = userRepository.create({
    name,
    email,
    isAdm,
    password: hashedPassword,
  })

  await userRepository.save(newUser)

  return newUser
}

export default createUserService
