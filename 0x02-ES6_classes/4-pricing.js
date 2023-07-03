import Currency from "./3-currency";
/**
 * Implementing a currency class
 */

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    set amount(val) {
        if (typeof val === 'number') {
            this._amount = val;
        }
    }

    get amount() {
        return this._amount;
    }

    set currency(val) {
        if (val instanceof Currency) {
            this._currency = val;
        }
    }

    get currency() {
        return this._currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }
}