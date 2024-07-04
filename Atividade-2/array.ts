// Questão 1
let numeros: number[] = [];

// Questão 2
numeros.push(1, 2, 3, 4);

// Questão 3
console.log("Questão 3:", numeros[1]);

// Questão 4
numeros[2] = 10;

// Questão 5
numeros.pop();

// Questão 6
console.log("Questão 6:", numeros.length);

// Questão 7
let frutas: string[] = ["maçã", "banana", "laranja"];

// Questão 8
console.log("Questão 8:", frutas[0]);

// Questão 9
frutas.push("uva");

// Questão 10
type Aluno = {
    nome: string;
    idade: number;
};

let aluno: Aluno = {
    nome: "João",
    idade: 25
};

let alunos: Aluno[] = [];
alunos.push(aluno);

// Questão 11
console.log("Questão 11:", alunos[0].nome);

// Questão 12
alunos.push(
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 24 },
    { nome: "Ana", idade: 23 }
);

// Questão 13
let produtos: string[] = [
    "Arroz", "Feijão", "Macarrão", "Carne", "Frango",
    "Batata", "Tomate", "Cebola", "Banana", "Maçã"
];

console.log("Questão 13:");
for (let i = 0; i < produtos.length; i++) {
    if (i % 2 === 0) {
        console.log(produtos[i]);
    }
}
