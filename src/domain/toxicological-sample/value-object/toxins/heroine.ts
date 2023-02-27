import BaseToxin from './baseToxin'

export default class Heroine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, Heroine.name)
  }
}