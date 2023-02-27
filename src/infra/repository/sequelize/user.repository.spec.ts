import { Sequelize } from 'sequelize-typescript'
import User from '../../../domain/user/entity/user'
import UserModel from './user.model'
import UserRepository from './user.repository'

describe('User Repository suit tests', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })
    sequelize.addModels([UserModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create a user', async () => {
    const body = {
      email: 'test@email.com',
      password: '123456789'
    }

    const userRepository = new UserRepository()

    const user = new User('1', body.email, body.password)

    await userRepository.create(user)

    const userModel = await UserModel.findOne({ where: { id: '1' }})

    expect(userModel.toJSON()).toStrictEqual({
      id: '1',
      email: body.email,
      password: expect.anything()
    })
  })
})