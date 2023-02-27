import BaseToxin from './baseToxin'

export default class Amphetamine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, Amphetamine.name)
  }
}