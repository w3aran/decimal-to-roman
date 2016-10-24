const DECIMAL_SYMBOLS = [
  1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
];
const ROMAN_SYMBOLS = [
  "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
];

function convertDecimalToRoman (number) {
  let output = "";
  for(let i = 0; i < DECIMAL_SYMBOLS.length; i++) {
    let value = parseInt(number / DECIMAL_SYMBOLS[i], 10);
    for(let j = 0; j < value; j++) {
      output += ROMAN_SYMBOLS[i];
    }
    number = number % DECIMAL_SYMBOLS[i];
  }
  return output;
}

export {
  convertDecimalToRoman
};
