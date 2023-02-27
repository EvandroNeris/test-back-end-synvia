import bcrypt from 'bcrypt'
import {
  Model,
  Table,
  PrimaryKey,
  Column,
  BeforeCreate
} from 'sequelize-typescript'
import { Hooks } from 'sequelize/types/hooks'

@Table({
  tableName: 'user',
  timestamps: false
})
export default class UserModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string

  @Column({ allowNull: false })
  declare email: string

  @Column({ allowNull: false })
  declare password: string

  @BeforeCreate
  static async hashPassword(user: UserModel) {
    user.password = await bcrypt.hash(user.password, 8)
  }

}