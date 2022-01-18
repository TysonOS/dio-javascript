const lista = [
    {
        nome: 'Ouro',
        preco: 100
    },
    {
        nome: 'Prata',
        preco: 50
    },
    {
        nome: 'bronze',
        preco: 30
    },
    {
        nome: 'cobre',
        preco: 10
    }
]

const saldoDisponivel = 500;

function calculaSaldoDisponivel(lista, saldo){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldo);

}

console.log(calculaSaldoDisponivel(lista, saldoDisponivel));