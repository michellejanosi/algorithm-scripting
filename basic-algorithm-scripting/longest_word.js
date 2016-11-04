/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(str) {
  var longestWord = 0; // a placeholder for the longest word in a string

  str = str.split(' '); // create an array of each word in the string
  for(var i = 0; i < str.length; i++){ // loop for counting each character of each word in array
    if(str[i].length > longestWord) { // if the length of the word is larger than longestWord
      longestWord = str[i].length; // that word becomes the longestWord
    }
  }
  return longestWord; // 🚀 shooting out the length of the longest word from given string
}

findLongestWord("The quick brown fox jumped over the lazy dog");
