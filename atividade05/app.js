//01
// O comando for em JavaScript é usado para criar loops, que são estruturas que permitem repetir um bloco de código um número específico de vezes. O loop for é muito útil quando você sabe  quantas vezes deseja repetir um bloco de código.
//02
// O comando for define o início de uma repetição através da seção de inicialização. 
// for (inicialização; condição; incremento) {
//     código a ser executado repetidamente
// }
//03
// O comando for define o fim de uma repetição através da seção de condição. 
// for (inicialização; condição; incremento) {
//     código a ser executado repetidamente
// }
//04
// A alteração do valor em cada repetição dentro da estrutura de repetição "for" ocorre na parte de incremento do loop.
// for (inicialização; condição; incremento) {
//     código a ser executado repetidamente
// }
// //05
// for(let i = 0; i < 10; i++){
//     console.log("Testando uma frase!")
// }
//06
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// //07
// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }
// //08
// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }
//09
// let nomes = ['João', 'Paulo', 'Pedro', 'Gustavo', 'Maria']
// for(let n of nomes){
//     console.log(n);
// }
//10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// //11
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//12
// let soma: number = 0;
// for (let i = 1; i <= 100; i++) {
//     soma += i;
// }
// console.log("A soma dos números de 1 a 100 é:", soma);
//13 
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
//14
// let produto = 1;
// for (let i = 1; i <= 5; i++) {
//     produto *= i;
// }
// console.log("O produto dos números de 1 a 5 é:", produto);
// //15 
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }
//16
// let soma = 0;
// const quantidadeNotas = 5;
// for (let i = 1; i <= 5; i++) {
//     let nota = Number(prompt(`Digite a nota ${i}:`));
//     soma += nota;
// }
// let media = soma / quantidadeNotas;
// console.log(`A média das notas é: ${media.toFixed(2)}`);
// //17
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }
//18
// let lista: number[] = [];
// for (let i = 0; i < 10; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     lista.push(numero);
// console.log("Notas:", lista);
// console.log("Nota Máxima:", Math.max(...lista));
// console.log("Nota Mínima:", Math.min(...lista));
//19
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
//20
// let lista: number[] = [];
// for (let i = 0; i < 5; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     lista.push(numero);
// }
// let aprovados: number = 0;
// let reprovados: number = 0;
// for (let i = 0; i < lista.length; i++) {
//     if (lista[i] >= 7) {
//         aprovados++;
//     } else {
//         reprovados++;
//     }
// }
// console.log(`${aprovados} aluno(s) foram aprovados.`);
// console.log(`${reprovados} aluno(s) foram reprovados.`);
//21
// let numero = Number(prompt("Digite um número inteiro:"));
// let soma: number = 0;
// while (numero > 0) {
//     let digito = numero % 10;
//     soma += digito;
//     numero = Math.floor(numero / 10);
// }
// console.log("A soma dos dígitos é:", soma);
//22
// let numero = Number(prompt("Digite um número inteiro:"));
// console.log(`Divisores de ${numero}:`);
// // Loop para encontrar e exibir os divisores
// for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//         console.log(i);
//     }
// }
//23
// let totalAltura = 0;
// for (let i = 1; i <= 5; i++) {
//     let altura = Number(prompt(`Digite a altura da pessoa ${i} (em metros):`));
//     totalAltura += altura;
// }
// let mediaAltura = totalAltura / 5;
// console.log(`A média de altura das ${5} pessoas é: ${mediaAltura.toFixed(2)} metros.`);
// //24
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
//25 
// let numero = Number(prompt("Digite um número inteiro:"));
// let somaPares = 0;
// let numeroString = numero.toString();
// for (let i = 0; i < numeroString.length; i++) {
//     let digito = parseInt(numeroString[i], 10);
//     if (digito % 2 === 0) {
//         somaPares += digito;
//     }
// }
// console.log("A soma dos dígitos pares é:", somaPares);
// //26 
// let numero = Number(prompt("Digite um número:"))
// let numeroString: string = numero.toString();
// let numeroInvertido: string = "";
// for (let i = numeroString.length - 1; i >= 0; i--) {
//     numeroInvertido += numeroString[i];
// }
// let numeroInvertidoNumero: number = parseInt(numeroInvertido, 10);
// console.log("Número invertido:", numeroInvertidoNumero);
