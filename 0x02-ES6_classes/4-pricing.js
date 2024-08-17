import Currency from './3-currency.js'

export default class Pricing {
  constructor (amount, currency) {
    this.amount = amount
    this.currency = currency
  }

  get amount () {
    return this._amount
  }

  get currency () {
    return this._currency
  }

  set amount (newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number')
    }
    this._amount = newAmount
  }

  set currency (newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency')
    }
    this._currency = newCurrency
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`
  }

  static convertPrice (amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate
    }
    throw new TypeError('Amount and/or conversionRate must be a number')
  }
}
