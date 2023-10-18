
export default class NullObject extends null {
  constructor () {
    return Object.create(new.target.prototype)
  }
}
