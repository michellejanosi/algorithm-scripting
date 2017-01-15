/*
Return the sum of those two numbers and all numbers between them.
*/

function sumAll(arr) {
  // get the max and min from arr using built in methods
  var min = Math.min.apply(null, arr);
  var max = Math.max.apply(null, arr);

  // loop through array and push each number to newArr
  var newArr = [];
  while(min <= max) {
   newArr.push(min++);
  }

  // use reduce function to add each element in array and return the sum
  var sum = newArr.reduce(function(a, b) {
    return a + b;
  });
  return sum;
}

sumAll([1, 4]); // returns 10

// a somewhat condensed version of same

function sumAll(arr) {
  var total = [];
  // i is equal to the smallest number in arr; while i is less than the max number in arr, increase i by 1
  for(var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
    // push i to total array
    total.push(i);
  }
  // use the reduce function to add the numbers in the total array
  var sum = total.reduce(function(a, b) {
    return a + b;
  }, 0);

  // return that total
  return sum;
}

sumAll([1, 4]); // returns 10
