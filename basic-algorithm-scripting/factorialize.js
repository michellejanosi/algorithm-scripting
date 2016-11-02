/* Return the factorial of the provided integer.
Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

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
