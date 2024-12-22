/*
Boolean - true or false, 1 or 0;
- exemplo: let verdadeiro = true; let falso = false;
Condicionais Booleanas: 10 > 5 resultado: true; 10 < 5 resultado: false; 10 == 5 resultado: false; 10 != 5 resultado: true;
Operadores Booleanos: && (and), || (or), ! (not); > (maior), < (menor), >= (maior ou igual), <= (menor ou igual), === (igual), != (diferente);
*/

const numero = 11;
const numeropar = (numero % 2) === 0;

console.log (numeropar);

/*
Condicionais: if, else if, else;
- é utilizado para verificar se uma condição é verdadeira ou falsa. Se if for verdadeiro, ele executa o bloco de código dentro do if. Senão, ele executa o bloco de codigo dentro de else if ou se nenhuma condição for verdadeira, ele executa o bloco de código dentro de else.
- exemplo: 
    const idade = 18;

    if (idade < 18) {
        console.log("Menor de idade");
    } else if (idade === 18) {
        console.log("Acabou de se tornar maior de idade");
    } else {
        console.log("Maior de idade");
    }
*/

/**
 * DESAFIO:
 * Faça um programa para calcular o valor de uma viagem:
 * 1 - Preço do etanol.
 * 2 - Preço da gasolina.
 * 3 - O tipo de combustivel que será utilizado.
 * 4 - Gasto médio de combustivel por km.
 * 5 - Distancia em Km da viagem.
 * 
 * Imprima no Console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 4.99;
const precoGasolina = 5.99;
const tipoCombustivel = 'etanol';
const gastoMedio = 11;
const distancia = 1250;

if (tipoCombustivel === 'etanol') {
    const valorViagem = (distancia / gastoMedio) * precoEtanol;
    console.log('O valor da viagem é: R$ ' + valorViagem.toFixed(2));
} else if (tipoCombustivel === 'gasolina') {
    const valorViagem = (distancia / gastoMedio) * precoGasolina;
    console.log('O valor da viagem é: R$ ' + valorViagem.toFixed(2));
} else {
    console.log('Tipo de combustivel não encontrado');
}