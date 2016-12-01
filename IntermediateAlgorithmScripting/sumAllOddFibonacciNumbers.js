/* Sum All Odd Fibonacci Numbers 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous
numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
  var fibs = [1,1];
  for (i = 1; i < num; i++) {
		fibs.push(fibs[i] + fibs[i-1]);
  }
  var toBeAdded = [];
  for (var j in fibs) {
	if (fibs[j] % 2 !== 0 && fibs[j] <= num) {
		toBeAdded.push(fibs[j]);
	  }
  }
  for (k = 0, sum = 0; k < toBeAdded.length; sum += toBeAdded[k++]);
  return sum;
}

sumFibs(4);
// returns 5
