import Car from './10-car.js'

export default class EVCar {
  constructor (brand, motor, color, range) {
    this._brand = brand
    this._motor = motor
    this._color = color
    this._range = range
  }

  cloneCar () {
    const obj = new Car()
    return obj.cloneCar()
  }
}
