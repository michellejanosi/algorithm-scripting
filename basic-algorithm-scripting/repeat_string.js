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

// an alternative solution

function repeatStringNumTimes(str, num) {
  var newStr = "";
  // if num is greater than 0, loop through string and increase until i is equal to num
  if(num > 0) {
    for(var i = 0; i < num; i++) {
      //newStr will equal str num times
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
