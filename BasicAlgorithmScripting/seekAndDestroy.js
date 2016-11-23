/* Seek and Destroy 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all
elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  // Remove all the values
  var destroyed = [];
  var a = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (arguments[i] == a[j]) {
        delete a[j];        
      }
    }
   }
  for (k = 0; k < a.length; k++) {
    if (a[k]) {                           //removes "falsy" values from deletion earlier
      destroyed.push(a[k]);
    }
   }
  return destroyed;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// returns [1,1]
