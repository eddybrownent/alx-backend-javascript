export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(sign) {
    this._code = sign;
  }

  get name() {
    return this._name;
  }

  set name(currency) {
    this._name = currency;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
