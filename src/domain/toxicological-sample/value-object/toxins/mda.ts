import BaseToxin from './baseToxin'

export default class MDA extends BaseToxin {
  constructor(value: number) {
    super(value, 0.2, MDA.name)
  }
}