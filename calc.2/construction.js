function Pessoa( nome, sobrenome){
    this.nome = nome; 
    this.sobrenome = sobrenome;
}

const p1 =  new Pessoa("José", "da Costa");

console.log(p1.nome);
console.log(p1.sobrenome);

class Pessoas{
    constructor( nome, cpf, nascimento){
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
    }
}

const p2 = new Pessoas("José", 1235681, "10/02/2015");
const p3 = new Pessoas("João", 12356841, "15/05/1990");

console.log(p2.nascimento);
console.log(p3.nome);
console.log(p4.cpf);