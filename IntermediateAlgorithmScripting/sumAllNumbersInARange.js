/* Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first. */

function sumAll(arr) {
  function sortNumber(a,b) {
    return a - b;
  }
  var c = arr.sort(sortNumber);
  var list = [];
  for (i = c[0]; i <= c[1]; i++) {
    list.push(i);
    }
  for (j = 0, sum = 0; j < list.length; sum += list[j++]);
  return sum;
}

sumAll([52, 4]);
// returns 1372
