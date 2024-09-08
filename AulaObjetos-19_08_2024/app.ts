class Pessoa {
    nome: string;
    cpf: string;
    genero: string;

    constructor(nome: string, cpf: string, genero: string){
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
    }

}

const pessoa1 = new Pessoa("Mateus", "123", "Masculino");
console.log(pessoa1);
console.log(typeof pessoa1)

