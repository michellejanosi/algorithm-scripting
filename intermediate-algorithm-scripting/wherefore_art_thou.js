/*
Make a function that looks through an array of objects (first argument) and
returns an array of all objects that have matching property and value pairs
(second argument). Each property and value pair of the source object has to be
present in the object from the collection if it is to be included in the
returned array.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var property = Object.keys(source); // set variable property to equal property of source

  // set arr to equal a filtered version of collection by looping through property first
  arr = collection.filter(function(el) {
   for(var i in property){
     // and if our el(ment) doesn't have a property of property[i] OR the el(ment) is not equal
     // to property[i] of source, we'll return false else return true
     if(!el.hasOwnProperty(property[i]) || el[property[i]] !== source[property[i]]) {
       return false;
     }
   }
   return true;
  });
  // Only change code above this line
  return arr; // return the results of our filter
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// returns [{first: "Tybalt", last: "Capulet" }]
