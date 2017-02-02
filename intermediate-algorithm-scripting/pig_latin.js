// Translate the provided string to pig latin.

function translatePigLatin(str) {
  var vowel = ['a','e','i','o','u'];
  var temp = [];

  // loop through each letter in str and check to see if that letter matches a vowel in vowel array
  for(var i = 0; i < str.length; i++) {
    // if no match on first loop through, break the loop => see if statement below
    if(vowel.indexOf(str[i]) !== -1) {
      break;
    } else {
      temp.push(str[i]); // otherwise, push the constant to the temp array
    }
  }

  // if variable i is still 0, this means the first index matched a vowel and we
  // return str and add the string "way" to the end
  if(i === 0){
    return str + "way";
    // otherwise, we return str while adding the constant/s and the string "ay" to the end
  } else {
    return (str.substr(i).concat(temp.join("")) + "ay");
  }
}

translatePigLatin("algorithm"); // returns "algorithmway"
