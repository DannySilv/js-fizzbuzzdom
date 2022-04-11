// Scrivi un programma che stampi in console i numeri da 1 a 100.
const rowWrapper = document.querySelector('.row'); // per bonus-1
let multiple;

for (let i = 1; i <= 100; i++) {

    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0) {
        multiple = "FizzBuzz";
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    } else if (i % 3 === 0) {
        multiple = "Fizz";
    } else if (i % 5 === 0) {
        multiple = "Buzz";
    } else {
        multiple = i;
    }

    console.log(multiple);

    // BONUS-2
    if (multiple == "FizzBuzz") {
        rowWrapper.innerHTML += `<div class="col-2 text-center"><div class="ms-box-fizz-buzz">${multiple}</div></div> `;
    } else if (multiple == "Fizz") {
        rowWrapper.innerHTML += `<div class="col-2 text-center"><div class="ms-box-fizz">${multiple}</div></div> `;
    } else if (multiple == "Buzz") {
        rowWrapper.innerHTML += `<div class="col-2 text-center"><div class="ms-box-buzz">${multiple}</div></div> `
    // BONUS-1
    } else {
        rowWrapper.innerHTML += `<div class="col-2 text-center"><div class="ms-box">${multiple}</div></div> `;
    }

}
