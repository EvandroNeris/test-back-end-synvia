import Heroine from './heroine'

describe('#Value-Object Heroine unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new Heroine(-100)
    }).toThrowError(`${Heroine.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const heroine = new Heroine(0.3)

    expect(heroine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const heroine = new Heroine(0.2)

    expect(heroine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const heroine = new Heroine(0.1)

    expect(heroine.runTest()).toBe('negative')
  })
})
