/*
Check if a string (first argument, str) ends with the given target string (second argument, target)
without using the .endsWith() method.
*/

function confirmEnding(str, target) {
  // use the .substr() method to return the characters in the string starting from the string's
  // end hence using the - in front of target and comparing it to target
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n"); // returns true

// another solution using the substring() method.
function confirmEnding(str, target) {
  // use the .substring() method to return the substring of str. The .lastIndexOf() method
  // returns the index number of the last occurance of said target. If the target
  // is not found, .lastIndexOf() returns -1. All this compared to target returns
  // true or false.
  return str.substring(str.lastIndexOf(target)) === target;
}

confirmEnding("Bastian", "n"); // returns true
