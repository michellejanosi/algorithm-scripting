/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  // use built-in splice method to start at index 0 and chop off howMany
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2); // returns [3]

// another solution using a 'for' loop
function slasher(arr, howMany) {
  // loop through array 'howMany' times starting at index 0
  for(var i = 0; i < howMany; i++) {
    // use shift method to remove 'howMany' elements from the head of array
    arr.shift();
    return arr;
  }
}
slasher([1, 2, 3], 2); // returns [3]

// and another using a 'while' loop
function slasher(arr, howMany) {
  while(howMany > 0) {
    arr.shift();
    howMany--;
  }
  return arr;
}

slasher([1, 2, 3], 2); // returns [3]
