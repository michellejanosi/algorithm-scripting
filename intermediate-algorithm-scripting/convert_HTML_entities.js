/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
string to their corresponding HTML entities.
*/

function convertHTML(str) {
  //use regex with replace method to find characters and replace with HTML entities
  str = str.replace(/&/g, '&amp;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;')
           .replace(/'/g, '&apos;');

  return str;
}

convertHTML("Dolce & Gabbana"); // returns "Dolce &​amp; Gabbana"
