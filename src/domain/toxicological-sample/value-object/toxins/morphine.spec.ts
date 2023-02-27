import Morphine from './morphine'

describe('#Value-Object Morphine unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new Morphine(-100)
    }).toThrowError(`${Morphine.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const morphine = new Morphine(0.3)

    expect(morphine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const morphine = new Morphine(0.2)

    expect(morphine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const morphine = new Morphine(0.1)

    expect(morphine.runTest()).toBe('negative')
  })
})
