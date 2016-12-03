/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
  // use the typeof operator to return if bool is boolean
  if(typeof bool === 'boolean') {
    return true;
  }
  return false;
}

booWho(null); // returns false

// a refactored, condensed solution
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null); // returns false
