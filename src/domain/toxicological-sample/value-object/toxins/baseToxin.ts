import ErrorMessage from '../../../../utils/error-messages'
import { NEGATIVE, POSITIVE } from '../../../../utils/shared-constants'

export default class BaseToxin {
  protected _value: number
  protected _baseValue: number
  private _toxinName: string

  constructor(value: number, baseValue: number, toxinName: string) {
    this._value = value
    this._baseValue = baseValue
    this._toxinName = toxinName

    this.handleValidate()
  }

  protected handleValidate(): boolean {
    if (this._value < 0) {
      throw new Error(`${this._toxinName} ${ErrorMessage.toxinBase['0001']}`)
    }

    return true
  }

  get value(): number {
    return this._value
  }

  runTest(): string {
    if (this._value >= this._baseValue) {
      return POSITIVE
    }

    return NEGATIVE
  }
}