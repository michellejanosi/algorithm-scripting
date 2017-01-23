/*
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both. In other words, return the symmetric difference
of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // loop through array and compare with other array to find the difference using .indexOf()
  for(var i in arr2) {
    if(arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]); // push difference to newArr
    }
  }

  // loop through array and compare with other array to find the difference using .indexOf()
  for(var j in arr1) {
    if(arr2.indexOf(arr1[j]) === -1) {
      newArr.push(arr1[j]); // push difference to newArr
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // returns [4]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite",
"andesite", "grass", "dirt", "dead shrub"]; // returns ["diorite", "pink wool"]

// alternate solution
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2); // combine the 2 arrays to make one big array

  // a search function to find the unique element of the 2 arrays
  function search(el) {
    if((arr1.indexOf(el) === -1) || (arr2.indexOf(el) === -1)) {
      return el;
    }
  }

  // return new array that filters out the unique element found in the search function
  return newArr.filter(search);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
