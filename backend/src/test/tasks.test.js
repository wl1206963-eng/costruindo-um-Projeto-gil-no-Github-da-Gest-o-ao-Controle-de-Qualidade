const GerenciadorTarefas = require('../gerenciador');

test('Deve adicionar uma nova tarefa com sucesso', () => {
    const gestor = new GerenciadorTarefas();
    expect(gestor.adicionarTarefa("Estudar Engenharia")).toBe("Sucesso");
    expect(gestor.listarTarefas().length).toBe(1);
});

test('Não deve permitir adicionar tarefa vazia', () => {
    const gestor = new GerenciadorTarefas();
    expect(gestor.adicionarTarefa("")).toBe("Erro: Tarefa vazia");
});