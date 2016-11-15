/*
Return the lowest index at which a value (second argument) should be inserted into
an array (first argument) once it has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
  // add num to arr
  arr.push(num);
  // use filter method to remove duplicate nums (if any) from array
  arr.filter(function(element, i, arr) {
    return arr.indexOf(element) === i;
  });
  // sort the array from least to greatest number
  arr.sort(function(a, b) {
    return a - b;
  });
  // return the index of num in arr
  return arr.indexOf(num); // returns 2
}

getIndexToIns([10, 20, 30, 40, 50], 30);
