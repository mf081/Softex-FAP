// Questão 1
let variavelNull: null = null;

// Questão 2
let variavelUndefined: undefined;

// Questão 3
console.log(variavelNull === null);

// Questão 4
console.log(variavelUndefined === undefined);

// Questão 5
type ObjetoVazio = {
    nome?: string;
};

let objeto: ObjetoVazio = {};
objeto.nome = undefined;
console.log("Questão 5:", objeto);
