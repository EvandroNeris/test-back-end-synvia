import BaseToxin from './baseToxin'

export default class Codeine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, Codeine.name)
  }
}