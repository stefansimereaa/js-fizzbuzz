console.log(`JS OK`);

// # Esercizio FizzBuzz

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// - Raccolgo tutti gli elementi dal DOM dove andranno stampati i risultati
// - Aggancio un event listener al button di Genera
//    **Quando** l'utente clicca sul bottone
//    - Stampo i numeri da 1 a 100
//    - inserisco nei elementi recuperati dal dom fizz al posto del multiplo di 3
//    - inserisco nei elementi recuperati dal dom buzz al posto del multiplo di 5
//    - inserisco nei elementi recuperati dal dom FizzBuzz se sono numeri multipli di 3 e 5
//    **Fine**


// Raccolgo elementi dal DOM
const number = document.getElementById (`number`);

// Buttons 

const button = document.getElementById(`generates`);
console.log(button);

const button2 = document.getElementById(`cancel`);
console.log(button2);


//Resto in ascolto del click sul bottone

number.innerHTML = " ";

//Button Generates
button.addEventListener(`click`, function() {

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.remove(`d-none`);
    result.classList.add(`d-block`, `d-flex`);

    //Ciclo
    for(let i = 1; i <=100; i++){

        let text = "";

        //Calcolo e cambio colore in base alla situazione
        if(i % 3 === 0 && i % 5 === 0){
            text = "FizzBuzz";
            number.innerHTML += `<div class="cardnumber fizzbuzz">` + text + `</div>`;
        } else if (i % 3 === 0){
            text = "Fizz";
            number.innerHTML += `<div class="cardnumber fizz">` + text + `</div>`;
        } else if (i % 5 === 0){
            text = "Buzz";
            number.innerHTML += `<div class="cardnumber buzz">` + text + `</div>`;
        } else {
            text = i.toString();
            number.innerHTML += '<div class="cardnumber text-black">' + text + '</div>';
        }
    }
})

//Button Delete
button2.addEventListener(`click`, function(){

    //Row Display
    const result = document.getElementById(`result`)
    result.classList.add(`d-none`);

})