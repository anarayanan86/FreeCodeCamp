/* Repeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
  // repeat after me
  var arr = [];
  for (i = 0; i < num; i++) {
    arr.push(str);
  }
  return arr.toString().replace(/\,/g,"");
}

repeatStringNumTimes("Repeat a String", 5.3);
// returns "Repeat a StringRepeat a StringRepeat a StringRepeat a StringRepeat a String"
