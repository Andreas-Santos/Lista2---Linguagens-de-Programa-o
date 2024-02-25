/*
    1. Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus
    lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
    Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
    comprimentos dos três lados de um triângulo e retorne sua classificação quanto
    ao tamanho de seus lados.
*/

console.log(classificarTriangulo(3,3,3));
console.log(classificarTriangulo(2,3,3));
console.log(classificarTriangulo(2,3,4));

//cria a função que classifica o triângulo
function classificarTriangulo(a,b,c) {
    let string = "";
    
    if(a === b && a === c) {
        string += "O triângulo informado é um Triângulo Equilátero";
    }else if(a == b || b == c) {
        string += "O triângulo informado é um Triângulo Isósceles";
    }else{
        string += "O triângulo informado é um Triângulo Escaleno";
    }

    return string;
}
