export function calc(inputVal, factor) {
  return (parseFloat(inputVal) * parseFloat(factor)).toFixed(2);
}

export class Database {
  constructor() {
    this.curKey;
    this.conFactor;
    this.keyArray;
  }

  static databaseNew(response, newCur) {
    console.log("DatabaseNew has run");
    let curKey = Object.entries(response.conversion_rates);
    let keyArray = [];
    for (let i = 0; i < curKey.length; i++) {
      keyArray.push(curKey[i][0]);
    }
    this.keyArray = keyArray;
    for (let i = 0; i < curKey.length; i++) {
      if (keyArray.includes(newCur)) {
        if (newCur === curKey[i][0]) {
          this.conFactor = curKey[i][1];
          this.curKey = curKey;
        }
      } else {
        this.conFactor = "invalidCur";
        this.curKey = curKey;
      }  
    }
  }

  static databaseOld(newCur) {
    console.log("DatabaseOld has run");
    let keyArray = [];
    for (let i = 0; i < this.curKey.length; i++) {
      keyArray.push(this.curKey[i][0]);
    }
    for (let i = 0; i < this.curKey.length; i++) {
      if (keyArray.includes(newCur)) {
        if (newCur === this.curKey[i][0]) {
          this.conFactor = this.curKey[i][1];
        }
      } else {
        this.conFactor = "invalidCur";
      } 
    }
  }
}
