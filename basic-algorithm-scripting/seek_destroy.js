/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.
*/

function destroyer(arr) {
  // convert arguments to a real Array
  var args = Array.from(arguments); // returns [[1, 2, 3, 1, 2, 3], 2, 3]
  // slice off the first element of array starting at 0 to return 2 and 3 only
  args.splice(0, 1); // returns [2, 3];
  // loop through arr
  for(var i = 0; i < arr.length; i++) {
    // loop through args
    for(var j = 0; j < args.length; i++) {
      // if the element in arr is equal to the element in args, we delete the element in arr
      if(arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  // filter out the Boolean elements and return only the nonmatching numbers
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1, 1]
