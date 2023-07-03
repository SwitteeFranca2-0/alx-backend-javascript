/**
 * Implementing an airplane class
 */
export default class Airport {
  /**
     * Creating an airport class
     * @param {string} code - The code of the airport
     * @param {string} name - The name of the airport
     */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set name(val) {
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    this._code = val;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
