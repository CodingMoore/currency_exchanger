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
    let keyArray = [];
    for (let i = 0; i < this.curKey.length; i++) {
      keyArray.push(this.curKey[i][0]);
    }
    console.log(keyArray);
    for (let i = 0; i < this.curKey.length; i++) {
      if (keyArray.includes(newCur)) {
        if (newCur === this.curKey[i][0]) {
          this.conFactor = this.curKey[i][1];
          console.log(this.curKey[i][0]);
        }
      } else {
        this.conFactor = "invalidCur";
      } 
    }
  }
}


// static databaseOld(newCur) {
//   console.log("DatabaseOld has run");
//   for (let i = 0; i < this.curKey.length; i++) {
//     let keyArray = [];
//     keyArray.push(this.curKey[i][0]);
//     console.log(keyArray);
//     if (keyArray.includes(newCur)) {
//       if (newCur === this.curKey[i][0]) {
//         this.conFactor = this.curKey[i][1];
//         console.log(this.curKey[i][0]);
//       }
//     } else {
//       this.conFactor = "invalidCur";
//     } 
//   }
// }