//Crie uma função chamada ehNegativo
// que recebe um número como parâmetro e retorna true se for negativo e false se for positivo.

function ehNegativo(a){
    if(a > 0){
        return true;
    }else {
        return false;
    }
}

const number = ehNegativo(-1);
console.log(number);