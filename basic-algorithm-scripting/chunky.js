/*
Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var chunked = []; // set variable for final chunked array

  // loop through length of array and increment by the size of the array
  for(var i = 0; i < arr.length; i += size) {
    // add the sliced chunk of the array to chunked array
    chunked.push(arr.slice(i, i + size));
  }
  return chunked; // return the chunked array
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// returns [ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8 ] ]
