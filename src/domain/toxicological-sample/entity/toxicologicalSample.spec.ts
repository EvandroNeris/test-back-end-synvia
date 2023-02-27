import ErrorMessage from '../../../utils/error-messages'
import ToxicologicalSample from './toxicologicalSample'

describe("Toxicological Sample test", () => {
  it('should throw error when ID is empty', () => {
    expect(() => {
      new ToxicologicalSample('', '11111')
    }).toThrowError('Id is required')
  })

  it('should throw error when ID is empty', () => {
    expect(() => {
      new ToxicologicalSample('', '11111')
    }).toThrowError('Id is required')
  })

  it('should get SampleCode value', () => {
    const toxicologicalSample = new ToxicologicalSample('1234', '11111')
    expect(toxicologicalSample.sampleCode).toBe('11111')
  })

  it('should return negative to toxicoloical test when cocaine is less than base value', () => {
    const toxicologicalSample = new ToxicologicalSample('123456', '123456')
    const sample = {
      cocaine: 0.4,
      amphetamine: 0.1,
      methamphetamine: 0.1,
      mda: 0.1,
      mdma: 0,
      thc: 0.01,
      morphine: 0.1,
      codeine: 0.1,
      heroine: 0.1,
      benzoylecgonine: 0,
      cocaethylene: 0,
      norcocaine: 0
    }

    toxicologicalSample.loadAllToxins(sample)

    const result = toxicologicalSample.runToxicologicalTest()

    const expected = {
      sampleCode: '123456',
      sampleResult: 'negative'
    }

    expect(result).toEqual(expected)
  })

  it('should return positive to toxicoloical test when cocaine is grather than base value', () => {
    const toxicologicalSample = new ToxicologicalSample('123456', '123456')
    const sample = {
      cocaine: 0.678,
      amphetamine: 0.1,
      methamphetamine: 0.1,
      mda: 0.1,
      mdma: 0,
      thc: 0.1,
      morphine: 0.1,
      codeine: 0.1,
      heroine: 0.1,
      benzoylecgonine: 0,
      cocaethylene: 0.06,
      norcocaine: 0
    }
    
    toxicologicalSample.loadAllToxins(sample)

    const result = toxicologicalSample.runToxicologicalTest()

    const expected = {
      sampleCode: '123456',
      sampleResult: 'positive'
    }

    expect(result).toEqual(expected)
  })

  it('should return positive to toxicoloical test when amphetamine is grather than base value', () => {
    const toxicologicalSample = new ToxicologicalSample('123456', '123456')
    const sample = {
      cocaine: 0.4,
      amphetamine: 0.3,
      methamphetamine: 0.1,
      mda: 0.1,
      mdma: 0,
      thc: 0.1,
      morphine: 0.1,
      codeine: 0.1,
      heroine: 0.1,
      benzoylecgonine: 0,
      cocaethylene: 0,
      norcocaine: 0
    }

    toxicologicalSample.loadAllToxins(sample)

    const result = toxicologicalSample.runToxicologicalTest()

    const expected = {
      sampleCode: '123456',
      sampleResult: 'positive'
    }

    expect(result).toEqual(expected)
  })
})
