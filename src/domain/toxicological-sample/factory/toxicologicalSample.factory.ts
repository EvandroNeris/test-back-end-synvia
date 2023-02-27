import { v4 as uuid } from 'uuid'
import ToxicologicalSampleModel from '../../../infra/repository/sequelize/toxicologicalSample.model'
import ToxicologicalSampleRepository from '../../../infra/repository/sequelize/toxicologicalSample.repository'
import ToxicologicalSample from '../entity/toxicologicalSample'

export default class ToxicologicalSampleFactory {
  public static create(sampleCode: string, sample: ToxicologicalSampleModel) {
    const toxicologicalSample = new ToxicologicalSample(uuid(), sampleCode)
    const toxicologicalRepository = new ToxicologicalSampleRepository()
    toxicologicalSample.loadAllToxins(sample)
    toxicologicalSample.runToxicologicalTest()

    toxicologicalRepository.create(toxicologicalSample)
    
    return {
      id: toxicologicalSample.id,
      sampleResult: toxicologicalSample.sampleResult,
      sampleCode: toxicologicalSample.sampleCode
    }
  }

  public static async findAll() {
    const toxicologicalRepository = new ToxicologicalSampleRepository()
    const result: ToxicologicalSample[] = await toxicologicalRepository.findAll()

    return result.map((toxicologicalSample: ToxicologicalSample) => ({
      id: toxicologicalSample.id,
      sampleCode: toxicologicalSample.sampleCode,
      sampleResult: toxicologicalSample.sampleResult,
      cocaine: toxicologicalSample.cocaine,
      amphetamine: toxicologicalSample.amphetamine,
      methamphetamine: toxicologicalSample.methamphetamine,
      mda: toxicologicalSample.mda,
      mdma: toxicologicalSample.mdma,
      thc: toxicologicalSample.thc,
      morphine: toxicologicalSample.morphine,
      codeine: toxicologicalSample.codeine,
      heroine: toxicologicalSample.heroine,
      benzoylecgonine: toxicologicalSample.benzoylecgonine,
      cocaethylene: toxicologicalSample.cocaethylene,
      norcocaine: toxicologicalSample.norcocaine
    }))
  }

  public static async findBySampleCode(code: string) {
    const toxicologicalRepository = new ToxicologicalSampleRepository()
    const toxicologicalSample: ToxicologicalSample = await toxicologicalRepository.findOne(code)

    return {
      id: toxicologicalSample.id,
      sampleCode: toxicologicalSample.sampleCode,
      sampleResult: toxicologicalSample.sampleResult,
      cocaine: toxicologicalSample.cocaine,
      amphetamine: toxicologicalSample.amphetamine,
      methamphetamine: toxicologicalSample.methamphetamine,
      mda: toxicologicalSample.mda,
      mdma: toxicologicalSample.mdma,
      thc: toxicologicalSample.thc,
      morphine: toxicologicalSample.morphine,
      codeine: toxicologicalSample.codeine,
      heroine: toxicologicalSample.heroine,
      benzoylecgonine: toxicologicalSample.benzoylecgonine,
      cocaethylene: toxicologicalSample.cocaethylene,
      norcocaine: toxicologicalSample.norcocaine
    }
  }
}