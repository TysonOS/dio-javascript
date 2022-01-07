var inputTarefa = document.getElementById('inputTarefa');
const listaTarefas = document.getElementById('listaTarefas');
let countTarefa = 0;

function validador(){
    if(inputTarefa.value.length == 0 ){
        return;
    } else{
        countTarefa++
        adicionar(inputTarefa.value)
        inputTarefa.value = ""
    }

}

function adicionar(descricao){
    const divTarefa = document.createElement('div');
    const tarefaCheck = document.createElement('input');
    const tarefaLabel = document.createElement('label');
    const tarefaDescricao = document.createTextNode(descricao);
    //chckbox
    tarefaCheck.setAttribute('type', 'checkbox')
    tarefaCheck.setAttribute('name', `tarefa_${countTarefa}`);
    tarefaCheck.setAttribute('id', `tarefa_${countTarefa}`);
    //descricao
    tarefaLabel.setAttribute('for', `tarefa_${countTarefa}`);
    tarefaLabel.appendChild(tarefaDescricao);
    //cria no html
    divTarefa.classList.add('itemTarefa')
    divTarefa.appendChild(tarefaCheck);
    divTarefa.appendChild(tarefaLabel);

    listaTarefas.appendChild(divTarefa);
}