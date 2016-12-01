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
