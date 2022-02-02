function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
        } anos de idade.`;
}

const pessoa1 = {
    nome: 'Marcia',
    idade: 30,
};

const pessoa2 = {
    nome: 'Graça',
    idade: 26,
};

const animal = {
    nome: 'Ryan',
    idade: 4,
    raça: 'Pit-Bull',
};

console.log(calcularIdade.call(pessoa2, 30));