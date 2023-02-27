import { Sequelize } from 'sequelize-typescript'
import ToxicologicalSample from '../../../domain/toxicological-sample/entity/toxicologicalSample'
import ToxicologicalSamleModel from './toxicologicalSample.model'
import ToxicologicalSampleRepository from './toxicologicalSample.repository'

describe('Toxicological Sample Repository suit tests', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })
    sequelize.addModels([ToxicologicalSamleModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should save a toxicological sample', async () => {
    const body = {
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

    const toxicologicalSampleRepository = new ToxicologicalSampleRepository()

    const toxicologicalSample = new ToxicologicalSample('1', '2222')

    toxicologicalSample.loadAllToxins(body)
    toxicologicalSample.runToxicologicalTest()

    await toxicologicalSampleRepository.create(toxicologicalSample)

    const toxicologicalSampleModel = await ToxicologicalSamleModel.findOne({ where: { id: '1' }})

    expect(toxicologicalSampleModel.toJSON()).toStrictEqual({
      id: '1',
      sampleCode: '2222',
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
      norcocaine: 0,
      sampleResult: 'positive'
    })
  })  
})