const formPalindrome = document.querySelector('#formPalindrome');
const input = document.querySelector('#input');
const btnCheckWord = document.querySelector('#btnCheckWord');
const output = document.querySelector('#output');


formPalindrome.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value.trim() === '')
  {
    output.innerHTML = `<span class="error">You must enter a word or phrase.</span>`;
    formPalindrome.reset();
  } else {
    const inputParsed = input.value.replace(/[^a-z0-9]+/gi, '')
    .toLowerCase();
const inputReversed = inputParsed.split('').reverse().join('');
const palindrome = inputParsed === inputReversed ? 'Yup.' : 'Nope.'

console.log('input parsed', inputParsed);
console.log('reversed', inputReversed);
output.innerText = `Is ${input.value} a palindrome? ${palindrome}`;
formPalindrome.reset();
  }

})

