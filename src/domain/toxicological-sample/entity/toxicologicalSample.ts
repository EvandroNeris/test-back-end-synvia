import ToxinSampleModel from '../../@shared/models/toxin-sample.model'
import Amphetamine from '../value-object/toxins/amphetamine'
import Cocaine from '../value-object/toxins/cocaine'
import Codeine from '../value-object/toxins/codeine'
import Heroine from '../value-object/toxins/heroine'
import MDA from '../value-object/toxins/mda'
import MDMA from '../value-object/toxins/mdma'
import Methamphetamine from '../value-object/toxins/methamphetamine'
import Morphine from '../value-object/toxins/morphine'
import THC from '../value-object/toxins/thc'
import SampleCode from '../value-object/sampleCode'
import { NEGATIVE, POSITIVE } from '../../../utils/shared-constants'
import ToxicologicalSampleInterface from './toxicologicalSample.interface'

export default class ToxicologicalSample implements ToxicologicalSampleInterface {
  private _id: string
  private _sampleCode!: SampleCode
  private _cocaine!: Cocaine 
  private _amphetamine!: Amphetamine
  private _methamphetamine!: Methamphetamine
  private _mda!: MDA
  private _mdma!: MDMA
  private _thc!: THC
  private _morphine!: Morphine
  private _codeine!: Codeine
  private _heroine!: Heroine
  private _benzoylecgonine: number
  private _cocaethylene: number
  private _norcocaine: number
  private _sampleResult: string = NEGATIVE

  constructor(id: string, sampleCode: string) {
    this._id = id
    this._sampleCode = new SampleCode(sampleCode)

    this.handleValidate()
  }

  get id(): string {
    return this._id
  }

  get sampleCode(): string {
    return this._sampleCode.code
  }

  get cocaine(): number {
    return this._cocaine.value
  }

  get amphetamine(): number {
    return this._amphetamine.value
  }

  get methamphetamine(): number {
    return this._methamphetamine.value
  }

  get mda(): number {
    return this._mda.value
  }

  get mdma(): number {
    return this._mdma.value
  }

  get thc(): number {
    return this._thc.value
  }

  get morphine(): number {
    return this._morphine.value
  }

  get codeine(): number {
    return this._codeine.value
  }

  get heroine(): number {
    return this._heroine.value
  }

  get benzoylecgonine(): number {
    return this._benzoylecgonine
  }

  get cocaethylene(): number {
    return this._cocaethylene
  }

  get norcocaine(): number {
    return this._norcocaine
  }

  get sampleResult(): string {
    return this._sampleResult
  }

  private handleValidate(): boolean {
    if(this._id.length === 0) {
      throw new Error('Id is required')
    }

    return true
  }

  private handleConfirmCocaineTest(
    norcocaine: number, 
    cocaethylene: number, 
    benzoylecgonine: number
  ): string {
    const baseValue = 0.05

    if (norcocaine >= baseValue  || cocaethylene >= baseValue  || benzoylecgonine >= baseValue) {
      return POSITIVE
    }

    return NEGATIVE
  }


  loadAllToxins(toxinSample: ToxinSampleModel): void {
    this._cocaine = new Cocaine(toxinSample.cocaine)
    this._amphetamine = new Amphetamine(toxinSample.amphetamine)
    this._methamphetamine = new Methamphetamine(toxinSample.methamphetamine)
    this._mda = new MDA(toxinSample.mda)
    this._mdma = new MDMA(toxinSample.mdma)
    this._thc = new THC(toxinSample.thc)
    this._morphine = new Morphine(toxinSample.morphine)
    this._codeine = new Codeine(toxinSample.codeine)
    this._heroine = new Heroine(toxinSample.heroine)
    this._cocaethylene = toxinSample.cocaethylene
    this._norcocaine = toxinSample.norcocaine
    this._benzoylecgonine = toxinSample.benzoylecgonine
  }

  private runToxinsTests(): string[] {
    return [
      this._cocaine.runTest(),
      this._amphetamine.runTest(),
      this._methamphetamine.runTest(),
      this._mda.runTest(),
      this._mdma.runTest(),
      this._thc.runTest(),
      this._morphine.runTest(),
      this._codeine.runTest(),
      this._heroine.runTest()
    ]
  }

  runToxicologicalTest() {
    const toxinsResult = this.runToxinsTests()

    if (toxinsResult[0] === POSITIVE) {
      toxinsResult[0] = this.handleConfirmCocaineTest(this._norcocaine, this._cocaethylene, this._benzoylecgonine)
    }

    if (toxinsResult.includes(POSITIVE)) {
      this._sampleResult = POSITIVE
      return {
        sampleCode: this._sampleCode.code,
        sampleResult: this._sampleResult
      }  
    }
  
    return {
      sampleCode: this._sampleCode.code,
      sampleResult: this._sampleResult
    }
  }
}