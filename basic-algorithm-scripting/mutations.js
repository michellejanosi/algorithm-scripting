/*
Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.
*/

function mutation(arr) {
  // take each string from array and make it lower case (.indexOf() method is case sensitive)
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  // loop through str2 to see if all the letters are in str1
  for(var i = 0; i < str2.length; i++) {
    // The indexOf() method returns the position of the first occurrence of a specified value in str2.
    // if the value to search for never occurs, -1 is returned and it's false
  	if(str1.indexOf(str2[i]) === -1) {
  		return false;
  	}
  }
  // otherwise, it's true!
  return true;
}

mutation(["Mary", "Aarmy"]);

// just discovered the 'for ... in' loop. Useful for this challenge
function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();

  // The for/in statement loops through the properties of an object.
  // The block of code inside the loop will be executed once for each property.
  for(var i in str2) {
    if(str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); // returns false
