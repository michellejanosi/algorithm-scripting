/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
Note:
Remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  // use RegEx to find all the non-alphanumeric characters
  var nonalpha = /\W|_/g;

  //remove all the non-alphanumeric characters and set any upcase to lowercase
  str = str.replace(nonalpha, '').toLowerCase();
  //set str to a new variable
  var newStr = str;
  //split the characters, reverse it and join again to create a new string to compare to str
  newStr = newStr.split('').reverse('').join('');
  //return true or false if newStr matches or is equal to str
  return newStr === str;
}

palindrome("Never Odd or Even.\_@*/");
