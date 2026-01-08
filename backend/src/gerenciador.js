class GerenciadorTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        if (!tarefa || tarefa.trim() === "") {
            return "Erro: Tarefa vazia";
        }
        this.tarefas.push(tarefa);
        return "Sucesso";
    }

    listarTarefas() {
        return this.tarefas;
    }

    removerTarefa(tarefa) {
        const index = this.tarefas.indexOf(tarefa);
        if (index > -1) {
            this.tarefas.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = GerenciadorTarefas;