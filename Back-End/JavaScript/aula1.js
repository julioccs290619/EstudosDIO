/**
  * Variaveis e Constantes:
 * - let: define uma variavel.
 * - const: define uma constante imutavel.
 * para definir um novo valor a variavel não é necessário definir o tipo.
 * o tipo é definido automaticamente.
 */
console.log('Hello World!');
let variavel = 10;
const pi = 3.14;

/**
 * operadores matemáticos:
 * +: soma, - subtração, * multiplicação, / divisão, % resto da divisão.
 * exemplo: let soma = 10 + 5 resultado: 15; let sub = 10 - 5 resultado: 5; let mult = 10 * 5 resultado: 50; let div = 10 / 5 resultado: 2; let resto = 10 % 5 resultado: 0;
 */

/**
 * Faça um programa para calcular o valor de uma viagem:
 * 1 - preço do combustivel.
 * 2 - Gasto médio de combustivel por km.
 * 3 - Distancia em Km da viagem.
 * 
 * Imprima no Console o valor que será gasto para realizar esta viagem.
 */

let precoCombustivel = 6.62;
let gastoMedio = 11;
let distancia = 1250;
let valorviagem = (distancia / gastoMedio) * precoCombustivel;
console.log('O valor da viagem é: ' + valorviagem.toFixed(2));