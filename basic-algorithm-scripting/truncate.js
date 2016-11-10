/*
Truncate a string (first argument) if it is longer than the given maximum string length
(second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then
the addition of the three dots does not add to the string length in determining the
truncated string.
*/

function truncateString(str, num) {
  // if the length of the str is greater than num
  if(str.length > num) {
    // if the num is less than or equal to 3
    if(num <= 3) {
      // set str equal to our str starting at the first character and extracting num characters and adding ... to the ending
      str = str.slice(0, num).concat("...");
    } else {
      // otherwise same as above but subtracting 3 from num characters since adding ... adds to our str length
      str = str.slice(0, num-3).concat("...");
    }
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
