console.log('JS OK')

let numberText = ''

// Creo un contatore che parte da 1
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


// Stampo in console il numero 
console.log(numberText);