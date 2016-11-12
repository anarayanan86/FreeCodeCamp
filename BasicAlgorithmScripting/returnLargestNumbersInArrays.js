/* Return Largest Numbers in Arrays 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4
sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  // You can do this!
  var biggest = [];
  var largest = 0;
  var k = arr.length;  
  for (i = 0; i < k; i++) {        //first loop through the sub-arrays of the array
    nested = arr[i];               //define nested as the sub-arrays
    var l = nested.length;
    for (j = 0; j < l; j++) {      //then loop through the elements of each sub-array (i.e. nested)
      if (nested[j] > largest) {
        largest = nested[j];                      
      }
    }
    biggest.push(largest);
    largest = 0;
  }
  return biggest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// returns [5, 27, 39, 1001]
