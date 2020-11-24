export function calc(inputNum, factor) {
  return parseFloat(inputNum) * parseFloat(factor);
}

export class Database {
  constructor() {
    this.curKey;
    this.conFactor;
  }

  static databaseNew(response, newCur) {
    const curKey = Object.entries(response.conversion_rates);
    for (let i = 0; i < curKey.length; i++) {
      if (newCur === curKey[i][0]) {
        this.conFactor = curKey[i][1];
      }
    }
  }

  static databaseOld(newCur) {
    for (let i = 0; i < this.curKey.length; i++) {
      if (newCur === this.curKey[i][0]) {
        this.conFactor = this.curKey[i][1];
      }
    }
  }
}