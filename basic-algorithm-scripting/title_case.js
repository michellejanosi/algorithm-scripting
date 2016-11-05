/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  // change all the characters in str to lower case and make an array with each word from the str
  str = str.toLowerCase().split(' ');
  // loop through each character in the str of words, set var to str[i] where each character at index 0 is changed to upper case
  // and add that upper case character to str while also slicing off the character at index 1 otherwise your word looks like this: "Ii'm Aa.."
  for(var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  // return the str of words that are now put back together as a sentence with each first letter of every word capitalized 🎉
  return str.join(' ');
}

titleCase("I'm a little tea pot");
