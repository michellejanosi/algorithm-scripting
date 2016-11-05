/*
Return an array consisting of the largest number from each provided sub-array.
*/

function largestOfFour(arr) {
  // loop through each sub-array of the array
  for(var i = 0; i < arr.length; i++) {
    // set var for sub-array to equal the largest numbers of each sub-array by using the Math.max method which finds the largest number in each array
    // the Math.max() function returns the largest of zero or more numbers and
    // the apply() method calls a function with a given this value and arguments provided as an array
    // via https://developer.mozilla.org so essentially 'apply' the Math.max method to the given array
    arr[i] = Math.max.apply(Math, arr[i]);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
