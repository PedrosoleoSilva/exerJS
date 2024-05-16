//11. Faça um programa que calcule a soma dos números pares de 1 a 100.

function number(){
    let soma =0;
    for(let i = 1 ; i<= 100; i++){
        if(i % 2 === 0){
            soma += i ;
        }
    }
    return soma;
}


console.log(number())