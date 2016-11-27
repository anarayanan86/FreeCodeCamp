/* Roman Numeral Converter 
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  var result = '';
  var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var i = 0; i < rom.length; i++) {
    while (num >= ara[i]) {
      result += rom[i];
      num -= ara[i];
    }
  }
  return result;  
}

convertToRoman(5000);
// returns MMMMM
