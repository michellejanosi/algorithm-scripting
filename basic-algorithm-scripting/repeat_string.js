/*
Repeat a given string (first argument) num times (second argument). Return an empty
string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // if num is negative, an empty string is returned
  if(num < 0) {
    return "";
  }
  // use the built-in repeat method to return a new string repeated 'num' number of times
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3);
