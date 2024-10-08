import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
  constructor (sqft, floors) {
    super(sqft)
    this.floors = floors
  }

  get floors () {
    return this._floors
  }

  set floors (newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('Floors must be a number')
    }
    this._floors = newFloors
  }

  evacuationWarningMessage () {
    return `Evacuate slowly the ${this._floors} floors`
  }
}
