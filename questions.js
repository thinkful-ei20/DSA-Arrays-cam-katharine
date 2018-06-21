// URLify a string: O(n)
let URLify = string => string.replace(/ /g, '%20');
// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com/tauh ida parv veen'));


// Filtering an array: O(n)
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
// console.log(filterArray(arr1));


// Max sum in the array: O(n)
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
// console.log(maxSumInArray(arr2)); // 12


// Merge Arrays: O(n)
const mergeArrays = (arr1, arr2) => {
  let newArray = [...arr1, ...arr2]
  return newArray.sort((a, b) => a - b);
};

arr3 = [1, 3, 6, 8, 11];
arr4 = [2, 3, 5, 8, 9, 10];
// console.log(mergeArrays(arr3, arr4));


//Remove characters: O(n ^ 2)
const removeCharacters = (string, characters) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if(!characters.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}

const string = 'Battle of the Vowels: Hawaii vs Grozny';
console.log(removeCharacters(string, 'aeiou'));


// Products: O(n ^ 2)
const products = arr => {
  let prodArr = [];

  for (let i = 0; i < arr.length; i++) {
    let prod = 1;

    for (let k = 0; k < arr.length; k++) {
      if (arr[i] !== arr[k]) {
        prod *= arr[k];
      }
    }  
    prodArr.push(prod);
  }
  return prodArr;
}

arr5 = [1, 3, 9, 4];
console.log(products(arr5)); // [108, 36, 12, 27]


// 2D array: 
const array2D = arr => {
  let result = arr.map((a) => a.slice());
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let k = 0; k < arr[i].length; k++) {
          result[i][k] = 0;
        }
        for (let g = 0; g < arr.length; g++) {
          result[g][j] = 0;
        }
      }
    }
  }
  return result;
}

const arr6 = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

console.log(array2D(arr6));


// String rotation
const stringRotation = (string1, string2) => {
  let newStr1 = string1.slice(0, 2);

  if (string2.lastIndexOf(newStr1) > -1) {
    return true;
  }
  return false;
}

console.log(stringRotation('amazon', 'azonma')) // false
console.log(stringRotation('amazon', 'azonam')) // true
