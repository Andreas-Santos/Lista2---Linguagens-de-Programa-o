/*
    3. Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
    e tempo de aplicação. A primeira função retornará o montante da aplicação
    financeira sob o regime de juros simples e a segunda retornará o valor da
    aplicação sob o regime de juros compostos.
*/

let calculoJuros = (capital, taxa, tempo, tipoJuros) => tipoJuros(capital, taxa, tempo);

console.log(calculoJuros(1400, 7, 24, calculoJurosCompostos));
console.log(calculoJuros(600, 12, 60, calculoJurosSimples));

//cria função de calculo de juros Simples
function calculoJurosSimples(capital, taxa, tempo) {
    taxa /= 100; // para converter a porcentagem em decimal
    tempo /= 12; // para converter os meses em anos

    let juros = capital * taxa * tempo;
    let montante = juros + capital;

    return formatarMoeda(montante);
}

//cria função de calculo de juros compostos
function calculoJurosCompostos(capital, taxa, tempo) {
    taxa /= 100; // para converter a porcentagem em decimal
    tempo /= 12; // para converter os meses em anos

    let montante = capital * Math.pow(1 + taxa, tempo);

    return formatarMoeda(montante);
}

//cria função para formatar o dinheiro
function formatarMoeda(dinheiro) {
    let dinheiroFormatado = dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return dinheiroFormatado;
}