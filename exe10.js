//10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.


function fatorial(a){
    if(a === 0 && a === 1){
        return 1;
    }else{
        let result =1
        for(let i = 2; i <= a; i++){
            result *= i;
        }
        return result;
    }
}

let number= fatorial(1);
console.log(number)