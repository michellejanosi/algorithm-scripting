/*
Remove all falsy values from an array.
*/

function bouncer(arr) {
  // use .filter() method to create a new arr array with all elements that are not a Boolean
  arr = arr.filter(Boolean);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// scaled down even further

function bouncer(arr) {
  // use .filter() method to create a new arr array with all elements that are not a Boolean
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
