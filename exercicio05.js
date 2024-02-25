/*
    5. Escreva uma função que recebe um vetor de números inteiros e mostre como
    resultado qual é o menor e qual é o maior número.
*/

let array1 = [1, 2, 4, 1, 2, 92];
let array2 = [82, 9, 1, 2, -3, 1];

console.log(array1);
console.log(checaMinMaxArray(array1));

console.log(array2);
console.log(checaMinMaxArray(array2));

//checa o valor minimo e maximo dentro do array e retorna uma string
function checaMinMaxArray(array) {
    let max = array[0];
    let min = array[0];

    for(let x = 0; x < array.length; x++) {
        if(array[x] > max) {
            max = array[x];
        }

        if(array[x] < min) {
            min = array[x];
        }
    }

    let string = `O maior número do array é: ${max}, e o menor número do array é: ${min}`;

    return string;
}