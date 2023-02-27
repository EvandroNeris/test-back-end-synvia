import ToxicologicalSample from '../../../domain/toxicological-sample/entity/toxicologicalSample'
import ToxicologialSampleRepositoryInterface from '../../../domain/toxicological-sample/repository/toxicologicalSample-repository.interface'
import ErrorMessage from '../../../utils/error-messages'
import ToxicologicalSampleModel from './toxicologicalSample.model'

export default class ToxicologicalSampleRepository implements ToxicologialSampleRepositoryInterface {
  async create(entity: ToxicologicalSample): Promise<void> {
    await ToxicologicalSampleModel.create({
      id: entity.id,
      sampleCode: entity.sampleCode,
      cocaine: entity.cocaine,
      amphetamine: entity.amphetamine,
      methamphetamine: entity.methamphetamine,
      mda: entity.mda,
      mdma: entity.mdma,
      thc: entity.thc,
      morphine: entity.morphine,
      codeine: entity.codeine,
      heroine: entity.heroine,
      benzoylecgonine: entity.benzoylecgonine,
      cocaethylene: entity.cocaethylene,
      norcocaine: entity.norcocaine,
      sampleResult: entity.sampleResult
    })
  }

  async findOne(_sampleCode: string): Promise<ToxicologicalSample> {
    const result = await ToxicologicalSampleModel.findOne({ where: { sampleCode: _sampleCode }})

    if (!result?.id) {
      throw new Error(ErrorMessage.toxicologicalSample['0002'])
    }

    const { dataValues: { id, sampleCode, ...rest } } = result

    const toxicologicalSample = new ToxicologicalSample(id, sampleCode)
    toxicologicalSample.loadAllToxins(rest)
    return toxicologicalSample
  }

  async findAll(): Promise<ToxicologicalSample[]> {
    const toxicologicalSamleModels = await ToxicologicalSampleModel.findAll()
    return toxicologicalSamleModels.map(({ dataValues: { id, sampleCode, ...rest } }: any) => {
      const toxicologicalSample = new ToxicologicalSample(id, sampleCode)
      toxicologicalSample.loadAllToxins(rest)
      return toxicologicalSample
    })
  }
}