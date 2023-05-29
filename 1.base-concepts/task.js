"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let X = -b / (2 * a);
    return (arr = [X]);
  } else if (discriminant > 0) {
    let X1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let X2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return (arr = [X1, X2]);
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = (amount - contribution);
  const payMonth = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  const totalPayment = (payMonth * countMonths).toFixed(2);
  return  Number(totalPayment);
}
