export default class Airport {
  constructor (name, code) {
    this.name = name
    this.code = code
  }

  get name () {
    return this._name
  }

  get code () {
    return this._code
  }

  set name (newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string')
    }
    this._name = newName
  }

  set code (newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string')
    }
    this._code = newCode
  }

  get [Symbol.toStringTag] () {
    return this._code
  }
}
