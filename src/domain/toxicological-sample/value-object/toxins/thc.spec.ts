import THC from './thc'

describe('#Value-Object THC unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new THC(-100)
    }).toThrowError(`${THC.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const thc = new THC(0.3)

    expect(thc.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const thc = new THC(0.05)

    expect(thc.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const thc = new THC(0.01)

    expect(thc.runTest()).toBe('negative')
  })
})
