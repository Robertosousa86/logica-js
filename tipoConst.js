const idade = 34;
// idade = 35; gera um erro porque dessa forma não podemos atribuir outro valor a constante

const roberto = {
  idade: 34,
  diaNascimento: 23,
};
// saida não apresenta erros
console.log(roberto);
// atribuindo novos valores as propriedaddes
roberto.idade = 35;
console.log(roberto);
// transformando em um objeto imutavél
Object.freeze(roberto);
