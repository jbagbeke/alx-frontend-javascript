export default class Building {
  constructor (sqft) {
    this.sqft = sqft

    if (
      new.target !== Building &&
      typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      )
    }
  }

  get sqft () {
    return this._sqft
  }

  set sqft (newSqft) {
    if (typeof newSqft !== 'number') {
      throw new Error('SQFT must be a number')
    }
    this._sqft = newSqft
  }
}
