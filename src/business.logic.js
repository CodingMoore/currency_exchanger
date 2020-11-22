export function calc(inputNum, factor) {
  return parseFloat(inputNum) * parseFloat(factor);
}

export static class Database {
  constructor() {
    this.curKey = curKey;
    this.conFactor = conFactor
  }

  dataBase(response, newCur) {
    const curKey = Object.entries(response.conversion_rates);
    for (let i = 0; i < curKey.length; i++) {
      if (newCur === curKey[i][0]) {
        let conFactor = curKey[i][1];
        // return conFactor;
      }
    }
  }
}