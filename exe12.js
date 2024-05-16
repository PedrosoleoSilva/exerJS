// Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se
// o primeiro for múltiplo do segundo e falso caso contrário.

function Multi(a , b){
    if(a % b === 0){
        return 'O número e mutiplo do segundo'
    }else {
        return 'O número não é mutiplo do segundo'
    }
}

let number = Multi(63,23);
console.log(number);