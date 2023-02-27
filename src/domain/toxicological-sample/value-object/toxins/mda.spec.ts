import MDA from './mda'

describe('#Value-Object MDA unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new MDA(-100)
    }).toThrowError(`${MDA.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const mda = new MDA(0.3)

    expect(mda.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const mda = new MDA(0.2)

    expect(mda.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const mda = new MDA(0.1)

    expect(mda.runTest()).toBe('negative')
  })
})
