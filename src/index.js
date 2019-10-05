const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let map = new Map();
  for (let key of Object.keys(MORSE_TABLE)) {
    let newKey = key.split('').map(value => value == '.' ? '10' : '11').join(''); 
    
    if (key.length == 1) newKey = '00000000' + newKey; 
    if (key.length == 2) newKey = '000000' + newKey;
    if (key.length == 3) newKey = '0000' + newKey;
    if (key.length == 4) newKey = '00' + newKey;  
            
    map.set(newKey, MORSE_TABLE[key]);  
  }
  map.set('**********', ' ');

  let j = 0;
  let decodedMorse = '';
  for (let i = 0; i < (expr.length / 10); i++) {
    decodedMorse += map.get(expr.slice(j, j + 10));
    j += 10;
  }
  return decodedMorse;
}

module.exports = {
    decode
}