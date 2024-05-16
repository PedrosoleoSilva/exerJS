//9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.

function par(a){
    if(a % 2 === 0){
        return 'é Par';
    }else {
        return 'é Impar'
    }
}

let number = par(4);
console.log(number)