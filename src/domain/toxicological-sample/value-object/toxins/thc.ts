import BaseToxin from './baseToxin'

export default class THC extends BaseToxin {
  constructor(value: number) {
    super(value, 0.05, THC.name)
  }
}