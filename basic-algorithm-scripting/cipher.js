/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as
a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted
by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.
*/

// split str into an array, use map method to call the function 'cipher' for each element
// in the array and take the array and make it a string again.
function rot13(str) {
  str = str.split("").map(cipher).join("");
  // this function uses the ASCII code to shift the values of the letter by 13 places
  function cipher(letter) {
    letter = letter.charCodeAt();

    if(letter >= 65 && letter <= 77) {
      letter += 13;
    } else if (letter >= 78 && letter <= 90) {
      letter -= 13;
    }
    return String.fromCharCode(letter);
  }
  return str;
}


rot13("LBH QVQ VG!"); // returns "YOU DID IT!" 🎉👍💪
