import Codeine from './codeine'

describe('#Value-Object Codeine unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new Codeine(-100)
    }).toThrowError(`${Codeine.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const codeine = new Codeine(0.3)

    expect(codeine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const codeine = new Codeine(0.2)

    expect(codeine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const codeine = new Codeine(0.1)

    expect(codeine.runTest()).toBe('negative')
  })
})
