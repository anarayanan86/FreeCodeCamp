/* Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  var words = str.split(" ");
  var final = [];
  for (i = 0; i < words.length; i++) {
    sentence = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    final.push(sentence);
     }
  return final.toString().replace(/\,/g, " ");
}

titleCase("I'm a little tea pot");
//returns I'm A Little Tea Pot
