"use strict";

function getArrayParams(...arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = Number(
    (arr.reduce((sum, current) => sum + current, 0) / arr.length).toFixed(2)
  );

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return Number(arr.reduce((sum, current) => sum + current, 0).toFixed(2));
}

function differenceMaxMinWorker(...arr) {
  if (Math.max(...arr) - Math.min(...arr) >= 0) {
    return Math.max(...arr) - Math.min(...arr);
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let elem of arr) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
    } else {
      sumOddElement += elem;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; // сумма четных
  let countEvenElement = 0; // колличество четных

  if (arr.length == 0) {
    // условие на проверку наличия элементов в массиве
    return 0;
  }

  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    let maxValue = func(...arrOfArr[i]); // [spread-оператор] разбиваю каждый подМассив на отдельные значения и передаю в фнкцию насадку значения
    if (maxValue > maxWorkerResult) {
      // проверка на максимальное значеник  --maxValue--
      maxWorkerResult = maxValue;
    }
  }

  return maxWorkerResult;
}

// const arr = [
//   [10, 10, 11, 20, 10],
//   [67, 10, 2, 39, 88],
//   [72, 75, 51, 87, 43],
//   [30, 41, 55, 96, 62],
// ];
// console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
// console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
// console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
