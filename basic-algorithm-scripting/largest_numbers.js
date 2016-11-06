/*
Return an array consisting of the largest number from each provided sub-array.
*/

function largestOfFour(arr) {
  // loop through each sub-array of the array
  for(var i = 0; i < arr.length; i++) {
    // set var for sub-array to equal the largest numbers of each sub-array by using the Math.max method which finds the largest number in each array
    // the apply function is used to call the Math.max function so when I call 'Math.max.apply(Math, arr[1])',
    // the apply function will execute 'Math.max(4,5,1,3)' on the first loop and so on.
    arr[i] = Math.max.apply(Math, arr[i]);
  }
  return arr; // returning array with largest numbers from each sub-array
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
