console.log("Inicializado!");
// // 1. Estrutura: `for` combina inicialização, condição, e atualização do contador em uma linha; `while` se concentra apenas na condição, com as outras partes separadas.
// //Uso Comum: `for` é usado quando o número de repetições é conhecido; `while` é ideal para loops com condições dinâmicas e número de repetições incerto.
// //Legibilidade e Controle: `for` é mais legível e menos propenso a erros em loops contados; `while` é mais flexível, mas requer cuidado para evitar loops infinitos.
// //2. `for` é usado quando o número de repetiçõe é conhecido. `while` Usado quando o número de iterações não é conhecido
// //3
// let i = 0;
// while(i < 10){
//     console.log("Testando uma frase!")
//     i++;
// }
// //4
// let i = 465484133;
// while(i > 10){
//     console.log(i);
//     i /= 35;
// }
// //5
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while(i < 5)
// //6
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //7
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }
// //8
// let i = 1;
// let soma = 0;
// while (i <= 100) {
//   soma += i;
//   i++;
// }
// console.log("Soma dos números de 1 a 100:", soma);
// //9
// let i = 1;
// let produto = 1;
// while (i <= 5) {
//   produto *= i;
//   i++;
// }
// console.log("Produto dos números de 1 a 5:", produto);
//10 
var i = 1;
while (i <= 10) {
    console.log("9 x ".concat(i, " =  ").concat(9 * i));
    i++;
}
