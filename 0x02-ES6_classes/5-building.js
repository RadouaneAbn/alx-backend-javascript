export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') { throw new Error('sqft must be a number'); }
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() { return this._sqft; }

  set sqft(sqft) {
    if (typeof sqft !== 'number') { throw new Error('sqft must be a number'); }
    this._sqft = sqft;
  }
}
