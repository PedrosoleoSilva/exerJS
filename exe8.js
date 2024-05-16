//8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.

function menorNumero(a,b,c){
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else {
        return c;
    }
}

function menorNumero2(a,b,c){
    return Math.min(a,b,c);
}

let number = menorNumero(3,11,2);
console.log(number)

let number2 = menorNumero(1,2,3);
console.log(number2)