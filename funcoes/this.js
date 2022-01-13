function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa1 = {
    nome: "Tyson",
    idade: 19
};

const pessoa2 = {
    nome: "Jota",
    idade: 22
};

const pessoa3 = {
    nome: "Maria",
    idade: 30
};

const animal = {
    nome: "Tob",
    idade: 5
};

console.log(calculaIdade.call(animal, 25)) //call
console.log(calculaIdade.apply(animal, [25])) //apply
