import ErrorMessage from '../../../utils/error-messages'
import { SPECIAL_CHARACTERS } from '../../../utils/shared-constants'

const MAXIMUM_DIGITS = 8

export default class SampleCode {
  private _sampleCode: string

  constructor(sampleCode: string) {
    this._sampleCode = sampleCode

    this.handleValidate()
  }

  get code(): string {
    return this._sampleCode
  }

  handleValidate(): boolean {
    if (this._sampleCode?.length === 0) {
      throw new Error(ErrorMessage.sampleCode['0001'])
    }

    if (this._sampleCode?.length > MAXIMUM_DIGITS) {
      throw new Error(ErrorMessage.sampleCode['0002'])
    }

    if (SPECIAL_CHARACTERS.test(this._sampleCode)) {
      throw new Error(ErrorMessage.sampleCode['0003'])
    }

    return true
  }
}