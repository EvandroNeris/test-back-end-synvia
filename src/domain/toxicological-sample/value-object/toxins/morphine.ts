import BaseToxin from './baseToxin'

export default class Morphine extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, Morphine.name)
  }
}