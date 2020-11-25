export function calc(inputVal, factor) {
  return parseFloat(inputVal) * parseFloat(factor);
}

export class Database {
  constructor() {
    this.curKey;
    this.conFactor;
  }

  static databaseNew(response, newCur) {
    console.log("DatabaseNew has run");
    let curKey = Object.entries(response.conversion_rates);
    for (let i = 0; i < curKey.length; i++) {
      if (newCur === curKey[i][0]) {
        this.conFactor = curKey[i][1];
        this.curKey = curKey;
      }
    }
  }

  static databaseOld(newCur) {
    console.log("DatabaseOld has run");
    for (let i = 0; i < this.curKey.length; i++) {
      if (newCur === this.curKey[i][0]) {
        this.conFactor = this.curKey[i][1];
      }
    }
  }
}