// Reverse the provided string.

function reverseString(str) {
  str = str.split(''); // separates the string into substrings
  str = str.reverse(); // the first array element becomes the last & last becomes the first
  str = str.join(''); // joins all elements of an array into a string
  return str;
}

reverseString("hello");

/* The above is my original solution but it isn't DRY (Don't Repeat Yourself) so here's
 a better solution, below, to fix this  */

function reverseString(str) {
  return str.split('').reverse().join(''); // chained each of the above methods into 1 line
}

reverseString("hello");
