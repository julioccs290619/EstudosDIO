/*
     Exercicio 1:
  Faça um programa para calcular a média de 3 notas de um aluno da faculdade e imprima sua media e sua classificação conforme a tabela abaixo:
  - Media < 5: Reprovado
  - Media >= 5 e < 7: Recuperação
  - Media >= 7: Aprovado
 */

const nota1 = 7;
const nota2 = 8;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media < 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}

/*
    Exercicio 2:
 Faça um programa para calcular o IMC de uma pessoa e imprima sua classificação conforme a tabela abaixo:
    - IMC < 18.5: Abaixo do peso
    - IMC >= 18.5 e < 25: Peso normal
    - IMC >= 25 e < 30: Sobrepeso
    - IMC >= 30 e < 35: Obesidade Grau I
    - IMC >= 35 e < 40: Obesidade Grau II
    - IMC >= 40: Obesidade Grau III

Formula: IMC = peso / (altura * altura)
*/

const peso = 70;
const altura = 1.75;
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else if (imc >= 30 && imc < 35) {
    console.log('Obesidade Grau I');
} else if (imc >= 35 && imc < 40) {
    console.log('Obesidade Grau II');
} else {
    console.log('Obesidade Grau III');
}

/*
    Exercicio 3:
Faça um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - A vista Debito, recebe 10% de desconto.
2 - A vista Dinheiro ou Pix, recebe 15% de desconto.
3 - Em 2 vezes, preço normal de etiqueta sem juros.
4 - Em 3 vezes ou mais, preço normal de etiqueta + 10% de juros.
*/

const preco = 100;
const condicao = 1;

if (condicao === 1) {
    console.log('Valor a ser pago: R$ ' + (preco - (preco * 0.1)).toFixed(2));
} else if (condicao === 2) {
    console.log('Valor a ser pago: R$ ' + (preco - (preco * 0.15)).toFixed(2));
} else if (condicao === 3) {
    console.log('Valor a ser pago: R$ ' + preco.toFixed(2));
} else if (condicao === 4) {
    console.log('Valor a ser pago: R$ ' + (preco + (preco * 0.1)).toFixed(2));
} else {
    console.log('Condição de pagamento inválida');
}
