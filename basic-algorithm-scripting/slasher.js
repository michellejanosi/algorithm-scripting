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
