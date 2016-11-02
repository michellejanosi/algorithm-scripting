/* Return the factorial of the provided integer.
Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

// using a 'for' loop
function factorialize(num) {
  var answer = num;

  if(num === 0) {
    return 1;
  }

  for(var i = 1; i < answer; i++) {
    num *= i;
  }
  return num;
}

factorialize(5);

// using a 'while' loop
function factorialize(num) {
  var answer = 1;
  
  while(num > 1) {
    answer *= num;
    num--;
  }
  return answer;
}

factorialize(5);
