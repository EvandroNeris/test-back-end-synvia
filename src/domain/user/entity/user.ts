import ErrorMessage from '../../../utils/error-messages'
import UserInterface from './user.interface'

export default class User implements UserInterface {
  private _id: string
  private _email: string
  private _password: string

  constructor(id: string, email: string, password: string) {
    this._id = id
    this._email = email
    this._password = password

    this.handleValidate()
  }

  get id(): string {
    return this._id
  }

  get email(): string {
    return this._email
  }

  get password(): string {
    return this._password
  }

  handleValidate(): boolean {
    if (this._id.length === 0) {
      throw new Error(ErrorMessage.user['0001'])
    }

    if (this._email.length === 0) {
      throw new Error(ErrorMessage.user['0002'])
    }

    if (this._password.length === 0) {
      throw new Error(ErrorMessage.user['0003'])
    }

    if (this._password.length < 8) {
      throw new Error(ErrorMessage.user['0004'])
    }

    return true
  }
}