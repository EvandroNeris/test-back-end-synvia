import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import ToxicologicalSampleModel from '../infra/repository/sequelize/toxicologicalSample.model'
import UserModel from '../infra/repository/sequelize/user.model'

const connection = new Sequelize({
  dialect: 'sqlite',
  host: 'localhost',
  storage: path.resolve('.', 'storage', 'database.sqlite'),
  models: [ToxicologicalSampleModel, UserModel],
  sync: { force: true }
})

export default connection