/*
Caesars Cipher 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) { // LBH QVQ VG!
  var n = [];
  for (i = 0; i < str.length; i++) {
     n.push(str[i].charCodeAt());          //first convert everythign in str to Unicode
  }                                      
  var o = [];
  for (j = 0; j < n.length; j++) {
    if (n[j] >= 78 && n[j] < 91) {
      o.push(n[j] - 13);
    } else if (n[j] >= 65 && n[j] < 78) {
      o.push(n[j] + 13);
    } else if (n[j] > 31 && n[j] < 64) {
      o.push(n[j]);
    } 
  }
  var decoded = []; 
  for (k = 0; k < o.length; k++) {
    decoded.push(String.fromCharCode(o[k]));
  }
  return decoded.toString().replace(/\,/g,"");  //regex is for removing commas from string
}

// Change the inputs below to test
rot13("SERR CVMMN!");
