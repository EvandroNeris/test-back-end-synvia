import ErrorMessage from '../../../utils/error-messages'
import SampleCode from './sampleCode'

describe('#Value-Object SampleCode unit tests', () => {
  it('should throw error when sample code is empty', () => {
    expect(() => {
      new SampleCode('')
    }).toThrowError(ErrorMessage.sampleCode['0001'])
  })


  it('should throw error when sample code is greater than 8', () => {
    expect(() => {
      new SampleCode('123456789')
    }).toThrowError(ErrorMessage.sampleCode['0002'])
  })

  it('should throw error if value received contains special characters', () => {
    expect(() => {
      new SampleCode('1232$%$7')
    }).toThrowError(ErrorMessage.sampleCode['0003'])
  })
})