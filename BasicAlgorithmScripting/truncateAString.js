/* Truncate a string 
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with
a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string
length in determining the truncated string. */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var arr = [];
  var cutString = "";
  if (num <= 3) {
    arr.push(str.slice(0, num));
    arr.push("...");
  } else if (str.length > num) {
    arr.push(str.slice(0, num-3));
    arr.push("...");
  } else if (str.length == num) {
    arr.push(str.slice(0, num));
  } else if (str.length < num) {
    arr.push(str.slice(0, num));
  }
  return arr.toString().replace(/\,/g,"");
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
// returns "A-tisket..."
