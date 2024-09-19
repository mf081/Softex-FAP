// //1
// const fraseUsuario = prompt("Entre a primeira frase");
// console.log(fraseUsuario);

// //2
// const valorString = "123";
// console.log(typeof Number(valorString));
// const valorNumero = 321;
// console.log(typeof String(valorNumero));

// //3
// const num1 = prompt("Digite o primeiro número");
// const num2 = prompt("Digite o segundo número");
// const soma = Number(num1) + Number(num2);
// console.log(soma);

// //4
// const texto1: string = "Estudar";
// const texto2: string = "é bom!";
// const valorNum: number = 48;
// console.log(texto1 + texto2 + " " + valorNum);

// //5
// const usuarioNome = prompt("Qual o seu nome?");
// alert(`Boas-vindas ${usuarioNome}!`);

// //6
// const idadeUsuario = String(prompt("Digite sua idade:"));
// console.log(Number(idadeUsuario));

// //7
// const numeroEntrada = String(prompt("Digite sua idade:"));
// console.log(parseFloat(numeroEntrada));

// //8
// const primeiroNumero = prompt("Digite o primeiro número");
// const segundoNumero = prompt("Digite o segundo número");
// const somaNumeros = Number(primeiroNumero) + Number(segundoNumero);

// //9
// const numeroDecimalStr = String(prompt("Digite um número:"));
// const numeroDecimal: number = parseFloat(numeroDecimalStr);
// const resultadoQuadrado = numeroDecimal ** 2;
// console.log(resultadoQuadrado);

// //10
// const anoNascimento = String(prompt("Digite seu ano de nascimento:"));
// const idadeCalculada = 2024 - Number(anoNascimento);
// console.log(`Você tem ou irá fazer esse ano: ${idadeCalculada}`);

// //11
// const primeiroNome = String(prompt("Digite seu nome:"));
// const ultimoNome = String(prompt("Digite seu segundo nome:"));
// const nomeCompleto = primeiroNome + " " + ultimoNome;
// console.log(nomeCompleto);

// //12
// const numerosEntrada = String(prompt("Digite uma sequência de números separados por espaço:"));
// let numerosSeparados = numerosEntrada.split(" ");
// const quantidadeNumerosEntrada: number = numerosSeparados.length;
// console.log(quantidadeNumerosEntrada);

// //13
// const nomeAnimal = prompt("Digite o nome de um animal:");
// console.log(`O nome do animal digitado foi ${nomeAnimal}:`);

// //14
// const primeiroNomeT = prompt("Digite um nome:");
// const ultimoNomeT = prompt("Digite um sobrenome:");
// console.log(ultimoNomeT, primeiroNomeT);

// //15
// const entradaTexto = prompt("Digite um nome e direi o número de caracteres");
// console.log(`${entradaTexto} tem ${entradaTexto?.length} caracteres`);

// //16
// const numeroParImpar = prompt('Digite um número:');
// if (Number(numeroParImpar) % 2 == 0) {
//     alert(`${numeroParImpar} é um número par.`);
// } else {
//     alert(`${numeroParImpar} é um número ímpar.`);
// }

// //17
// const numeroPosNeg = prompt('Digite um número:');
// if (Number(numeroPosNeg) > 0) {
//     alert(`${numeroPosNeg} é um número positivo.`);
// } else {
//     alert(`${numeroPosNeg} é um número negativo.`);
// }

// //18
// const primeiroNumeroComp = prompt('Digite o primeiro número:');
// const segundoNumeroComp = prompt('Digite o segundo número:');
// if (Number(primeiroNumeroComp) > Number(segundoNumeroComp)) {
//     alert(`${primeiroNumeroComp} é maior.`);
// } else {
//     alert(`${segundoNumeroComp} é maior.`);
// }

// //19
// const alturaPessoa = (prompt('Digite a altura (em metros):'));
// const pesoPessoa = (prompt('Digite o peso (em quilogramas):'));
// const imcCalculado = Number(pesoPessoa) / (Number(alturaPessoa) * Number(alturaPessoa));
// alert(`O seu IMC é: ${(imcCalculado).toFixed(2)}`);

// //20
// const nomeDigitado = prompt('Digite o seu nome:');
// if (String(nomeDigitado).length > 5) {
//     alert(`O nome "${nomeDigitado}" possui mais de 5 caracteres.`);
// } else {
//     alert(`O nome "${nomeDigitado}" possui 5 caracteres ou menos.`);
// }

// //21
// let estadoCivilUsuario = prompt('Digite o seu estado civil (casado, solteiro, divorciado, viúvo):');
// estadoCivilUsuario = String(estadoCivilUsuario).toLowerCase().trim();
// if (estadoCivilUsuario === 'casado') {
//     alert('Você é casado(a).');
// } else if (estadoCivilUsuario === 'solteiro') {
//     alert('Você é solteiro(a).');
// } else if (estadoCivilUsuario === 'divorciado') {
//     alert('Você é divorciado(a).');
// } else if (estadoCivilUsuario === 'viúvo') {
//     alert('Você é viúvo(a).');
// } else {
//     alert('Estado civil não reconhecido.');
// }

// //22
// const baseRetangulo = prompt('Digite a base do retângulo (em unidades):');
// const alturaRetangulo = prompt('Digite a altura do retângulo (em unidades):');
// const areaRetangulo = Number(baseRetangulo) * Number(alturaRetangulo);
// alert(`A área do retângulo com base ${baseRetangulo} e altura ${alturaRetangulo} é: ${areaRetangulo}`);

// //23
// let cidadeUsuario = prompt('Digite o nome da sua cidade:');
// cidadeUsuario = String(cidadeUsuario).toLowerCase().trim(); 
// if (cidadeUsuario.startsWith('s')) {
//     alert(`O nome da cidade "${cidadeUsuario}" começa com a letra 'S'.`);
// } else {
//     alert(`O nome da cidade "${cidadeUsuario}" não começa com a letra 'S'.`);
// }

// //24
// const primeiroNumeroDecimal = Number(prompt('Digite o primeiro número decimal:'));
// const segundoNumeroDecimal = Number(prompt('Digite o segundo número decimal:'));

// console.log(`O resto da divisão dos números decimais é: ${(primeiroNumeroDecimal % segundoNumeroDecimal).toFixed(2)}`);

// //25
// const numeroDecimalArr = Number(prompt("Digite um número decimal a ser arredondado: "));
// console.log(`O número ${numeroDecimalArr} arredondado é ${Math.floor(numeroDecimalArr)}`);

// //26
// const numeroInteiro = Number(prompt("Digite um número inteiro"));
// const numeroInteiroAdicionado = numeroInteiro + 10;
// const numeroString = numeroInteiroAdicionado.toString();

// console.log(`${numeroString} é do tipo ${typeof numeroString}`);

// //27
// const dataNascUsuario = prompt("Digite sua data de nascimento. Exemplo: 'dd/mm/aaaa': ");
// let dataNascSeparada: string[] = [];

// if (dataNascUsuario != null) {
//   dataNascSeparada = dataNascUsuario.split("/");
// }

// const diaNascimento: number = parseInt(dataNascSeparada[0]);
// const mesNascimento: number = parseInt(dataNascSeparada[1]);
// const anoNascimentoNum: number = parseInt(dataNascSeparada[2]);

// console.log(`Dia: ${diaNascimento}, Mês: ${mesNascimento}, Ano: ${anoNascimentoNum}`);

// //28
// const estadoUsuario = prompt("Você já disse a cidade em que mora, agora diga qual o estado: ");
// console.log(`Você mora em ${cidadeUsuario}, ${estadoUsuario}.`);

// //29
// console.log(`Bem-vindo ao nosso programa, nascido em ${dataNascUsuario}!`);

// //30
// const dadoInteiro = Number(prompt("Digite um número inteiro: "));
// const dadoTexto = prompt("Digite uma string: ");
// console.log(`Dados concatenados: ${dadoInteiro + " " + dadoTexto}`);

// //31
// const nomeProduto = prompt("Digite o produto: ");
// const precoProduto = prompt("Digite o preço do produto: ");
// console.log(`Resumo do pedido: ${nomeProduto}, R$${precoProduto}`);

// //32
// console.log(`O dobro de ${numeroInteiro} é igual a ${numeroInteiro ** 2}`);

// //33
// const emailUsuario = prompt("Digite seu e-mail: ");
// console.log(`Obrigada por se inscrever. Continuaremos enviando notícias para o e-mail: ${emailUsuario}!!`);

// //34
// console.log(`A soma de ${numeroInteiro} + ${dadoInteiro} é ${numeroInteiro + dadoInteiro}`);
// console.log(`A diferença de ${numeroInteiro} + ${dadoInteiro} é ${Math.abs(numeroInteiro - dadoInteiro)}`);
// console.log(`O produto de ${numeroInteiro} + ${dadoInteiro} é ${numeroInteiro * dadoInteiro}`);
// console.log(`O quociente de ${numeroInteiro} + ${dadoInteiro} é ${numeroInteiro / dadoInteiro}`);

// //35
// const baseTriangulo = Number(prompt("Digite a base do triângulo: "));
// const alturaTriangulo = Number(prompt("Digite a altura do triângulo: "));
// const areaTriangulo = baseTriangulo * alturaTriangulo;
// console.log(`A base do triângulo é ${areaTriangulo}`);

// //36
// const raioCirculo = Number(prompt("Digite o raio de uma circunferência: "));
// const piValor = 3.14;
// const perimetroCirculo = 2 * piValor * raioCirculo;
// console.log(perimetroCirculo);

// //37
// console.log(`O perímetro do triângulo 1 é: ${2 * (baseTriangulo + alturaTriangulo)}`);

// //38
// console.log(`A média aritmética entre os três números decimais já digitados aqui é: ${(numeroDecimal + primeiroNumeroDecimal + segundoNumeroDecimal / 3)}`);

// //39
// console.log(`${nomeUsuario}, você já viveu ${idadeCalculada * 365} dias e ${idadeCalculada * 12} meses.`);

// //40
// const valorRealUsuario = Number(prompt("Digite o valor em real: "));
// const valorDolarAtual = Number(prompt("Digite a cotação do dólar atualmente: "));
// const valorConvertidoDolar = valorRealUsuario * valorDolarAtual;
// console.log(valorConvertidoDolar);

// //41
// console.log(`O número decimal ${numeroDecimalArr} convertido para o número mais próximo é: ${Math.ceil(numeroDecimalArr)}`);

// //42
// console.log(`O resultado da operação com três números inteiros ((n1 + n2) * n3) é: ${(numeroInteiro + dadoInteiro) * numeroInteiro}`);

// //43
// const temperaturaCelsius = Number(prompt("Digite uma temperatura em graus Celsius: "));
// const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
// console.log(temperaturaFahrenheit);
