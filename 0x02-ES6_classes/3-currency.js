/**
 * Implementing a class
 */

export default class Currency {
  /**
     * Creating a class called "currency"
     *
     * @param {string} code - the symbpl of the currency
     * @param {string} name - the name of the currency
     */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    }
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    }
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
