import Cocaine from './cocaine'

describe('#Value-Object Cocaine unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new Cocaine(-100)
    }).toThrowError(`${Cocaine.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const cocaine = new Cocaine(0.6)

    expect(cocaine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const cocaine = new Cocaine(0.5)

    expect(cocaine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const cocaine = new Cocaine(0.3)

    expect(cocaine.runTest()).toBe('negative')
  })
})
