// Exercicio feito pelo professor atanes:

// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura "for" e retorne no formato:
// A soma de 50 a 100 é: X.

// let sum = 0;

// for(let count = 50; count <= 100; count = count + 1){
//   sum += count;
// }
// console.log('A soma total de 50 a 100 é: ' + sum);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

// let counter = 0;

// for(let index = 1; index <= 125; index += 1) {
//     if(index % 3 === 0) {
//         counter += 1;
//         console.log(index);
//     }
// }
// if(counter === 50) {
//     console.log('secret Message!');
// }

/// 3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Jogador 1 vence" ou "Empate" ou "Jogador 2 vence". 

// let jogador1 = 'scissors';
// let jogador2 = 'stone'; 

// if (jogador1 == 'paper' && jogador2 == 'stone'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == 'stone' && jogador2 == 'scissors'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == 'scissors' && jogador2 == 'paper'){
//   console.log('Jogador 1 vence');
// } else if (jogador1 == jogador2){
//   console.log('Empate');
// } else{
//   console.log('Jogador 2 vence');
// }

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

// let age = 20;
// let category;

//  Com if/else
// if (age >= 18) {
//   category = 'maior de idade';
// } else {
//   category = 'menor de idade';
// };

// console.log('A pessoa é ' + category);

// Com operador ternário
// console.log(age >= 18 ? 'Maior de idade' : 'Menor de idade');

// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// "Pessoa" é a mais nova.

// let ageMarcella = 15;
// let ageCarlos = 16;
// let ageCamila = 19;

// if(ageMarcella < ageCarlos && ageMarcella < ageCamila){
//   console.log('Marcella é a mais nova')
// }
// else if (ageCarlos < ageMarcella && ageCarlos < ageCamila){
//   console.log('Carlos é o mais novo')
// } 
// else {
//   console.log('Camila é o mais nova')
// }

//  Exercicio do dia:

// let fatorial = 1;

// for (let i = 1; i <= 10; i += 1){
//     fatorial = fatorial * i;
// }
// console.log(fatorial);

// let word = tryber;

// for (let index = 0; index <= word.length; index -= 1);{
//     word == index;
// }
// console.log(word);

    let word = 'tryber'; 
    let o = 0;
    
    for (let i = word.length - 1; i >= 0; -= i) {
        o += s[i];
        console.log(o);
    }

 


    