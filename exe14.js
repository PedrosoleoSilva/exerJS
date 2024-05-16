//Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for divisível por 5
// e falso caso contrário.

function divisivel5(a){
    if(a % 5 === 0){
        return 'Verdadeiro';
    }else {
        return 'Falso';
    }
}

let number = divisivel5(15);
console.log(number);