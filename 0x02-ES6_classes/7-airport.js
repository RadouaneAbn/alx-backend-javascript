export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') { throw new Error('name must be a string'); }
    if (typeof code !== 'string') { throw new Error('code must be a string'); }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
