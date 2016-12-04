/*
Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.
*/

function uniteUnique(arr) {
  var newArr; // variable for new array of unique values
  var args = Array.prototype.slice.call(arguments); // convert arguments to a real array

  // The reduce() method applies a function against an accumulator and each value
  // of the array (from left-to-right) to reduce it to a single value.
  newArr = args.reduce(function(a, b) {
    // The filter() method creates a new array with all elements that are 'filtered'
    // out of the array.
    return a.concat(b.filter(function(i) {
      // return each element of 'a' by checking that each index is not a duplicate
      return a.indexOf(i) === -1;
    }));
  });
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // returns [1, 3, 2, 5, 4]
