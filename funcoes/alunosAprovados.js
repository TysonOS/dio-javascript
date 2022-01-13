const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
	{
		nome: 'Pedro',
		nota: 4,
		turma: '1B',
	},
	{
		nome: 'Maria',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Junior',
		nota: 4,
		turma: '2C',
	},
];

function alunosAprovados(arrayAlunos, mediaFinal){
    let aprovados = [];
    
    for(let i = 0;i < arrayAlunos.length;i++){
        const {nome , nota} = arrayAlunos[i];       //object destructuring

        if(nota >= mediaFinal){
            aprovados.push(nome);
        }

    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));