import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserRepository from '../../../infra/repository/sequelize/user.repository'
import User from '../entity/user'

dotenv.config()

export default class UserFactory {
  public static create(email: string, password: string) {
    const user = new User(uuid(), email, password)
    const userRepository = new UserRepository()

    userRepository.create(user)

    return {
      id: user.id,
      email: user.email
    }
  }

  public static async login(email: string, password: string) {
    const userRepository = new UserRepository()
    const foundUser = await userRepository.findOne(email)

    if (!foundUser) {
      throw new Error('User not found')
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password)

    if (!isMatch) {
      throw new Error('Password is not correct')
    }

    const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, process.env.SECRET_KEY, {
      expiresIn: '2 days'
    })

    return {
      user: {
        id: foundUser.id,
        email: foundUser.email
      },
      token
    }
  }
}