import User from '../../../domain/user/entity/user'
import UserRepositoryInterface from '../../../domain/user/repository/user-repository.interface'
import ErrorMessage from '../../../utils/error-messages'
import UserModel from './user.model'

export default class UserRepository implements UserRepositoryInterface {
  async create(entity: User): Promise<void> {
    await UserModel.create({
      id: entity.id,
      email: entity.email,
      password: entity.password
    })
  }

  async findOne(_email: string): Promise<User> {
    const result = await UserModel.findOne({ where: { email: _email } })
    if (!result) {
      throw new Error(ErrorMessage.user['0005'])
    }

    const { dataValues: { id, email, password } } = result
    return new User(id, email, password)
  }
}