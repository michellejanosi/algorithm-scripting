/*
Check if a string (first argument, str) ends with the given target string (second argument, target)
without using the .endsWith() method.
*/

function confirmEnding(str, target) {
  // use the .substr() method to return the characters in the string starting from the string's
  // end hence using the - in front of target and comparing it to target 
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");
