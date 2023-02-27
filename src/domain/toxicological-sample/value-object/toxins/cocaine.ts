import BaseToxin from './baseToxin'

export default class Cocaine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.5, Cocaine.name)
  }
}