import Methamphetamine from './methamphetamine'

describe('#Value-Object Methamphetamine unit tests', () => {
  it('should throw error when value less then zero', () => {
    expect(() => {
      new Methamphetamine(-100)
    }).toThrowError(`${Methamphetamine.name} value needs to be positive`)
  })

  it('should returns positive when the value send is greater than the base value', () => {
    const methamphetamine = new Methamphetamine(0.3)

    expect(methamphetamine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is equal to the base value', () => {
    const methamphetamine = new Methamphetamine(0.2)

    expect(methamphetamine.runTest()).toBe('positive')
  })

  it('should returns positive when the value send is less then the base value', () => {
    const methamphetamine = new Methamphetamine(0.1)

    expect(methamphetamine.runTest()).toBe('negative')
  })
})
