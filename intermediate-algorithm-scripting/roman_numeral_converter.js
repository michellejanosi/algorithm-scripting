/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
// created variables to hold roman numerals and one for our final converted roman numeral
 var romanNum = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
 var converted = '';

// loop through the romanNum object and while the number is less than num, 'converted' will equal
// converted plus i which is the roman numeral and num equals num minus the 'regular' number
 for(var i in romanNum) {
   while(romanNum[i] <= num) {
     converted += i;
     num -= romanNum[i];
   }
 }
  return converted; // return our final converted number
}

convertToRoman(36); // returns XXXVI
