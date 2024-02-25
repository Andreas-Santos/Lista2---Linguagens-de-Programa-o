/*
    4. Crie uma função que verifica se um número inteiro passado como parâmetro é
    divisível por 3 e retorne true ou false.
*/

console.log(checaDivisao(9) ? "O número 9 é divisível por 3" : "O número 9 não é divisível por 3");
console.log(checaDivisao(4) ? "O número 4 é divisível por 3" : "O número 4 não é divisível por 3");

function checaDivisao(num) {
    let boolean;

    if(num % 3 === 0) {
        boolean = true;
    }else{
        boolean = false;
    }

    return boolean;
}