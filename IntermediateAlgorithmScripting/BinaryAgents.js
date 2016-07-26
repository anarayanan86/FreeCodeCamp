/* Binary Agents 
Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
  var a = str.split(" ");
  var ara = [];
  for (i = 0; i < a.length; i++) {
    ara.push(parseInt(a[i], 2));
  }
  var decoded = []; 
  for (k = 0; k < ara.length; k++) {
    decoded.push(String.fromCharCode(ara[k]));
  }
  return decoded.toString().replace(/\,/g,"");   
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/* returns "Aren't bonfires fun!?" */
