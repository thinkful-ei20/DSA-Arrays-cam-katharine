// URLify a string
let URLify = string => string.replace(/ /g, '%20');
console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com/tauh ida parv veen'));


// Filtering an array
let filterArray = arr => {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (5 <= arr[i]) {
      filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}
const arr1 = [5, 6, 7, 1, 2, 8]; // 5, 6, 7, 8
console.log(filterArray(arr1));


// Max sum in the array
let maxSumInArray = arr => {
  let sum = 0;
  let max = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
arr2 = [4, 6, -3, 5, -2, 1];
console.log(maxSumInArray(arr2)); // 12


// Merge Arrays