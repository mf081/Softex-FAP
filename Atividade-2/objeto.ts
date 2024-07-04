//Questão 1
type Pessoa = {
    nome: string;  
    idade: number
    endereco: string;
    // profissao: string;
};

let pessoa1: Pessoa = {
    nome: "João",
    idade: 30,
    endereco: "Rua das Flores, 123"
};

// //Questão 2
console.log(pessoa1.nome);


//Questão 3
type PessoaComProfissao = Pessoa & {
    profissao: string;
};

let pessoa2: PessoaComProfissao = {
    nome: "João",
    idade: 30,
    endereco: "Rua das Flores, 123",
    profissao: "Engenheiro"
};

// //Questão 4
pessoa2.idade = 31;
console.log(pessoa2.idade)

// //Questão 5
type Animal = {
    nome: string
    especie: string;
    cor: string;
};

let animal1: Animal = {
    nome: "Cavalo",
    cor: "Preta",
    especie: "Y"
};
//Questão 6
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
}
let livro1: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954
};
// //Questão 7
console.log(livro1.autor);

// //Questão 8
livro1.ano = 2020;
console.log("Questão 8: ", livro1.ano);

// //Questão 9
// delete livro1.titulo;

// Questão 10
type Carro = {
    marca: string;
    modelo: string;
    ano: number;
};

let carro: Carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2024
};
console.log("Questão 10: ", carro);

// Questão 11
// carro.modelo: undefined; 
// console.log("Questão 11: ", carro);

console.log("CODIGO INICIALIZADO")





