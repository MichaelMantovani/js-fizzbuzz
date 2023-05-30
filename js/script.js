console.log('JS OK')

let numberText = ''

for (let i = 1; i <= 100; i++) { 
  if(i % 5 === 0 && i % 3 === 0){
  numberText += ' BuzzFizz ';
} else if (i % 3 === 0){
  numberText += ' Fizz ';
} else if (i % 5 === 0){
  numberText += ' Buzz '
} else {
  numberText += ' ' + i;
}
}



console.log(numberText);