export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') { throw new Error('code must be a string'); }
    if (typeof name !== 'string') { throw new Error('name must be a string'); }

    this._code = code;
    this._name = name;
  }

  displayFullCurrency() { return `${this._name} (${this._code})`; }

  get code() { return this._code; }

  get name() { return this._name; }

  set name(name) { this._name = name; }

  set code(code) { this._code = code; }
}
