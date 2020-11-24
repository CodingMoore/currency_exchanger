export function calc(inputNum, factor) {
  return parseFloat(inputNum) * parseFloat(factor);
}

export static class Database {
  constructor() {
    this.curKey = curKey;
    this.conFactor = conFactor
  }

  databaseNew(response, newCur) {
    const curKey = Object.entries(response.conversion_rates);
    for (let i = 0; i < curKey.length; i++) {
      if (newCur === curKey[i][0]) {
        this.conFactor = curKey[i][1];
      }
    }
  }

  databaseOld(newCur) {
    for (let i = 0; i < this.curKey.length; i++) {
      if (newCur === this.curKey[i][0]) {
        this.conFactor = this.curKey[i][1];
      }
    }
  }
}