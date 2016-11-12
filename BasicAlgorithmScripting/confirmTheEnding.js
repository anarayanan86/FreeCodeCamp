/* Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would
like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var i = target.length;
  return (str.substr(str.length - i, i) == target);  
}

confirmEnding("Michael Jackson ", " ");
// returns true
