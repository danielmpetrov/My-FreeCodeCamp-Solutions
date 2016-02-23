// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
function convert(number) {
  var num = number;
  var roman = '';
  var romanOnes = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var romanTens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var romanHundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var romanThousands = ['M', 'MM', 'MMM', 'MMMM', 'MMMMM'];

  var ones = num % 10;
  num = Math.floor(num / 10);
  var tens = num % 10;
  num = Math.floor(num / 10);
  var hundreds = num % 10;
  num = Math.floor(num / 10);
  var thousands = num % 10;

  if (thousands !== 0) roman += romanThousands[thousands - 1];
  if (hundreds !== 0) roman += romanHundreds[hundreds - 1];
  if (tens !== 0) roman += romanTens[tens - 1];
  if (ones !== 0) roman += romanOnes[ones - 1];

  return roman;
}