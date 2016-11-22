/* Falsy Bouncer 
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filtered.push(arr[i]);
    }
   }
  return filtered;  
}

bouncer([7, "ate", "", false, 9]);
// returns [7, "ate", 9]
