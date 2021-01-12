const btnCheckWord = document.querySelector('#btnCheckWord');
const output = document.querySelector('#output');

document.querySelector('#formPalindrome').addEventListener('submit', () => {
  const input = document.getElementById('inputWord').value.replace(/[^a-z0-9]+/gi, '').toLowerCase();
  const inputReversed = input.split('').reverse().join('');
  console.log('original', input);
  console.log('reversed', inputWorinputReverseddReversed);
  outNumber.innerText = `This is the number: ${inputNumber}`; 
  const palendrome = input === inputReversed ? 'Yup.' : 'Nope.'
  outWord.innerText = `Is this word a palendrome? ${palendrome}`;
})

