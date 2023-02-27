export default interface ToxicologicalSampleInterface {
  get id(): string
  get sampleCode(): string
  get cocaine(): number
  get amphetamine(): number
  get methamphetamine(): number
  get mda(): number
  get mdma(): number
  get thc(): number
  get morphine(): number
  get codeine(): number
  get heroine(): number
  get benzoylecgonine(): number
  get cocaethylene(): number
  get norcocaine(): number
  get sampleResult(): string
}