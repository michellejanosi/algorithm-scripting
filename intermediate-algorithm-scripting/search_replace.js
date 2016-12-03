/*
Perform a search and replace on the sentence using the arguments provided and
return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Preserve the case of the original word when you are replacing it.
*/

function myReplace(str, before, after) {
  // first check if before is capitalized
  if(before[0].toUpperCase() === before[0]) {
    // if it is, capitalize the first index of after and add after while also
    // slicing off index 1
    after = after[0].toUpperCase() + after.slice(1);
  }
  // make str equal to the result of replacing before with after
  str = str.replace(before, after);
  return str; // return the new str
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// returns "He is Sitting on the couch"
