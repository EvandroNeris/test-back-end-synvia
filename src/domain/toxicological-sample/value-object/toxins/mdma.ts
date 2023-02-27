import BaseToxin from './baseToxin'

export default class MDMA extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, MDMA.name)
  }
}