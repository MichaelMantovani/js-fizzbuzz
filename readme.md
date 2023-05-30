# FizzBuzz

**TRACCIA**
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

**BONUS 1**:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche (template literals, innerHTML, append, ecc)

**SVOLGIMENTO TRACCIA**

- Creo un elemento contenitore nel DOM
- Recupero l'elemento dal DOM
- Creo un contatore che parte da 1
  **FINTANTO CHE** il mio contatore è minore di 100
  - Incremento il numero di 1
    **SE** il numero è divisibile per 3 e per 5
    - stampo nell'elemento del DOM 'FizzBuzz'
      **SE INVECE** è divisibile per 3
    - stampo nell'elemento del DOM 'Fizz'
      **SE INVECE** è divisibile per 5
    - stampo nell'elemento del DOM 'Buzz'
      **ALTRIMENTI**
    - stampo nell'elemento del DOM il numero
      **FINE**
