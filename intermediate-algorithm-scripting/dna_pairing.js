/*
The DNA strand is missing the pairing element. Take each character, get its
pair, and return the results as a 2d array.
*/

function pairElement(str) {
  // the object key specifying what array we would return
  var key = { T:["T", "A"], A:["A", "T"], G:["G", "C"], C:["C","G"] };
  // array to hold our return value
  var returnArr = [];

  // look at every character in the string and get its pair, appending it to the return array
  for(i = 0; i < str.length; i++) {
    returnArr.push(key[str[i]]);
  }

  // return the pairs
  return returnArr;
}

pairElement("GCG"); // returns [["G", "C"], ["C", "G"], ["G", "C"]]
