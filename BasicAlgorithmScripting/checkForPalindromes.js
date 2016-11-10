/* Check for Palindromes 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

*/

function palindrome(str) {
  // Good luck!
  madeLowerCase = str.toLowerCase().replace(/\s+/g, '');   //make str all lowercase and remove spaces
  
  dePunctuated = madeLowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(""); //remove punctuation and convert into array
  
  origString = dePunctuated.toString().replace(/\,/g, ""); //save original string without punctuation/spaces for comparison
  
  Reversed = dePunctuated.reverse().toString().replace(/\,/g, ""); //reversed into an array, back to string, and then remove commas from string
  
  if (origString == Reversed) {
    return true;
  } else {
    return false;
  }
}

palindrome("DAMMIt Im MaD");
// returns true
