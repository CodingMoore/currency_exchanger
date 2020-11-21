export function calc(inputNum, factor) {
  return parseFloat(inputNum) * parseFloat(factor);
}

export function dataBase(response) {
  const curKey = Object.entries(response.conversion_rates);
  console.log(curKey);
}