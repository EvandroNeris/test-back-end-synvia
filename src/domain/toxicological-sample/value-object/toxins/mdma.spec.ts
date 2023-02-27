import MDMA from './mdma'

describe('#Value-Object MDMA unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new MDMA(-100)
    }).toThrowError(`${MDMA.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const mdma = new MDMA(0.3)

    expect(mdma.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const mdma = new MDMA(0.2)

    expect(mdma.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const mdma = new MDMA(0.1)

    expect(mdma.runTest()).toBe('negative')
  })
})
