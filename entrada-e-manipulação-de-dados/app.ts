// //1
// let frase = prompt("Entre a primeira frase");
// console.log(frase);


// //2
// let string = "123";
// console.log(typeof Number(string));
// let number = 321;
// console.log(typeof String(string));


// // 3
// let numero1 = prompt("Digite o primeiro número");
// let numero2 = prompt("Digite o segundo número");
// let resultado = Number(numero1) + Number(numero2);
// console.log(resultado);


// //4
// let string1: string = "Estudar";
// let string2: string = "é bom!";
// let numero3: number = 48;
// console.log(string1 + string2  + " " + numero3);


// //5
// let nome = prompt("Qual o seu nome?");
// alert(`Boas-vindas ${nome}!`);


// //6
// let idade = String(prompt("Digite sua idade:"));
// console.log(Number(idade));


// //7
// let numeroInt = String(prompt("Digite sua idade:"));
// console.log(parseFloat(numeroInt));


// //8
// let numero1 = prompt("Digite o primeiro número");
// let numero2 = prompt("Digite o segundo número");
// let resultado = Number(numero1) + Number(numero2);


// //9
// let numeroDecStr = String(prompt("Digite um número:"));
// let numeroDec: number = parseFloat(numeroDecStr);
// numeroDec = numeroDec ** 2;
// console.log(numeroDec);


// //10
// let anoNasc = String(prompt("Digite seu ano de nascimento:"));
// let idadeAtual = 2024 - Number(anoNasc);
// console.log(`Você tem ou irá fazer esse ano: ${idadeAtual}`);


// //11
// let nomeP = String(prompt("Digite seu nome:"));
// let sobreNome = String(prompt("Digite seu segundo nome:"));
// let nomeCompleto = nomeP + " " + sobreNome;
// console.log(nomeCompleto);


// //12
// let numerosSeparados = String(prompt("Digite uma sequência de números separados por espaço:"));
// let espacos: string[] = [];
// espacos = numerosSeparados.split(" ");
// let quantidadeNumeros: number = espacos.length;
// console.log(quantidadeNumeros);

// //13
// let animal = prompt("Digite o nome de um animal:");
// console.log(`O nome do animal digitado foi ${animal}:`);

// //14
// let nomeTreze = prompt("Digite um nome:");
// let sobrenomeTreze = prompt("Digite um sobrenome:");
// console.log(sobrenomeTreze, nomeTreze);

// //15
// let umaString = prompt("Digite um nome e direi o numero de caracteres");
// console.log(`${umaString} tem ${umaString?.length} caracteres`);

// //16
// let nDeze = prompt('Digite um número:');
// if (Number(nDeze) % 2 == 0){
//     alert(`${nDeze} é um número par.`);
// } else {
//     alert(`${nDeze} é um número impar.`);
// }

// //17
//  let nSete = prompt('Digite um número:');
//  if (Number(nSete) > 0){
//     alert(`${nSete} é um numero Positivo`);
//  } else{
//     alert(`${nSete} é um numero Negativo`);
//  }

// //18
//  let nDzoito = prompt('Digite o primeiro número:');
//  let nDzoitoDois = prompt('Digite o segundo número:');
//  if (Number(nDzoito) > Number(nDzoitoDois)){
//     alert(`${nDzoito} é maior`);
//  } else{
//     alert(`${nDzoitoDois} é maior`);
//  }

// //19
// let altura = (prompt('Digite a altura (em metros):'));
// let peso = (prompt('Digite o peso (em quilogramas):'));
// let imc = Number(peso) / (Number(altura) * Number(altura));
// alert(`O seu IMC é: ${(imc).toFixed(2)}`);

// //20
// let nome = prompt('Digite o seu nome:');
// if (String(nome).length > 5) {
//     alert(`O nome "${nome}" possui mais de 5 caracteres.`);
// } else {
//     alert(`O nome "${nome}" possui 5 caracteres ou menos.`);
// }

// //21
// let estadoCivil = prompt('Digite o seu estado civil (casado, solteiro, divorciado, viúvo):');
// estadoCivil = String(estadoCivil).toLowerCase().trim();
// if (estadoCivil === 'casado') {
//     alert('Você é casado(a).');
// } else if (estadoCivil === 'solteiro') {
//     alert('Você é solteiro(a).');
// } else if (estadoCivil === 'divorciado') {
//     alert('Você é divorciado(a).');
// } else if (estadoCivil === 'viúvo') {
//     alert('Você é viúvo(a).');
// } else {
//     alert('Estado civil não reconhecido.');
// }

// //22 
// let base = prompt('Digite a base do retângulo (em unidades):');
// let altura = prompt('Digite a altura do retângulo (em unidades):');
// let area = Number(base) * Number(altura);
// alert(`A área do retângulo com base ${base} e altura ${altura} é: ${area}`);

// //23
// let cidade = prompt('Digite o nome da sua cidade:');
// cidade = String(cidade).toLowerCase().trim(); 
// if (cidade.startsWith('s')) {
//     alert(`O nome da cidade "${cidade}" começa com a letra 'S'.`);
// } else {
//     alert(`O nome da cidade "${cidade}" não começa com a letra 'S'.`);
// }

//24
let numero1Str = prompt('Digite o primeiro número decimal:');
let numero2Str = prompt('Digite o segundo número decimal:');











