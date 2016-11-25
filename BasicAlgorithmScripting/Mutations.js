/* Mutations 

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring
case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
  word1 = arr[0].toLowerCase();
  word2 = arr[1].toLowerCase();
  var c = 0;
  var d = word2.length;
  for (i = 0; i < d; i++) {
    if (word1.indexOf(word2[i]) !== -1) {
      c++;
    }
  }
  return c == d;  
}
mutation(["hello", "hey"]);
// returns false