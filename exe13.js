//13. Faça um programa que verifique se um número é negativo, positivo ou zero.

function verificar(a){
    if(a < 0){
        return 'O número é negativo';
    }else if(a > 0){
        return 'O número é positivo';
    }else {
        return 'O número é zero';
    }
}

let number = verificar(0);
console.log(number)