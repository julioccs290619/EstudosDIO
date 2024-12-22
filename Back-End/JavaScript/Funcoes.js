/**
 * Funções no JavaScript:
 * 
 * Funções são blocos de código projetados para executar uma tarefa específica.
 * Elas podem ser definidas usando a palavra-chave `function`, seguida por um nome, 
 * uma lista de parâmetros entre parênteses e um bloco de código entre chaves.
 * 
 * As funções podem ser chamadas em qualquer lugar do código após sua definição,
 * e podem retornar valores usando a palavra-chave `return`.
 * 
 * Exemplos de uso incluem cálculos matemáticos, manipulação de dados e interação com o DOM.
 */

function teste() {
    console.log('teste');
}

teste();

/**
 * Função com parâmetros:
 * 
 * As funções podem receber parâmetros, que são valores passados para a função
 * quando ela é chamada. Esses parâmetros podem ser usados dentro da função
 * para realizar operações específicas.
 */

function quadrado(valor) {
    return valor * valor;
}

const resultado = quadrado(5);
console.log(resultado);

/*
Para um código mais organizado, sempre colocaremos o codigo principal dentro de uma função chamada main. Exemplo:
    Function main() {
        console.log('Programa Principal');
    }
    main();
*/

function calcularimc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function classificarimc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

function main() {
    const peso = 70;
    const altura = 1.75;
    const imc = calcularimc(peso, altura);
    console.log(classificarimc(imc));
}

main();

/* 
É possivel invocar imediatamente uma função sem a necessidade de chama-la em outro lugar do código. Exemplo:
    (function() {
        console.log('Função invocada imediatamente');
    })();
*/

/*
    Exercício 1:
Crie uma função que escreva seu nome no console.
*/

function escreverNome(nome) {
    console.log('Meu nome é ' + nome);
}

escreverNome('Lucas');

/*
    Exercício 2:
Crie uma função verifique se você é maior de Idade.
*/

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}

verificarIdade(17);

/*
É possivel também utilizar funções dentro de outras funções. Exemplo:

    function escreverNome(nome) {
    return nome;
}
    function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome(Julio) + ' ,Você é maior de idade');
    } else {
        console.log(escreverNome(Julio) + ' ,Você é menor de idade');
    }
}
    verificarIdade(17);
*/

/*
    Exercicio 3:
Faça um programa, utilizando funções, que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - A vista Debito, recebe 10% de desconto.
2 - A vista Dinheiro ou Pix, recebe 15% de desconto.
3 - Em 2 vezes, preço normal de etiqueta sem juros.
4 - Em 3 vezes ou mais, preço normal de etiqueta + 10% de juros.
*/

function aplicarDesconto (valor, desconto){
    return valor - (valor * (desconto / 100));
}
function aplicarJuros (valor, juros){
    return valor + (valor * (juros / 100));
}

const preco = 100;
const condicao = 1;

if (condicao === 1) {
    console.log('Valor a ser pago: R$ ' + (aplicarDesconto(preco, 10).toFixed(2)));
} else if (condicao === 2) {
    console.log('Valor a ser pago: R$ ' + (aplicarDesconto(preco, 15).toFixed(2)).toFixed(2));
} else if (condicao === 3) {
    console.log('Valor a ser pago: R$ ' + preco.toFixed(2));
} else if (condicao === 4) {
    console.log('Valor a ser pago: R$ ' + (aplicarJuros(valor, 10)).toFixed(2));
} else {
    console.log('Condição de pagamento inválida');
}