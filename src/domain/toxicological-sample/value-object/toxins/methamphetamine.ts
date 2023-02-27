import BaseToxin from './baseToxin'

export default class Methamphetamine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, Methamphetamine.name)
  }
}