let tarefas = []; //lista de tarefas
let tarefaId = 1; //sequencial para o ID de cada tarefa


/*
    Classe de serviço para as operações
    relacionadas a tarefas
*/
class TarefaService {


    //Método para retornar todas as tarefas
    static obterTodos() {
        return tarefas;
    }


    //método para cadastrar uma tarefa
    static incluir(tarefaModel) {
        const tarefa = {
            id: tarefaId++,
            descricao: tarefaModel.descricao,
            finalizada: tarefaModel.finalizada
        };


        tarefas.push(tarefa);
        return tarefa;
    }


    //método para atualizar uma tarefa
    static alterar(id, tarefaModel) {
        const indice = tarefas.findIndex(t => t.id === parseInt(id));
        //se o index não é encontrado ( posição ) o valor de index será -1.
        if (indice !== -1) {
            tarefas[indice].descricao = tarefaModel.descricao;
            tarefas[indice].finalizada = tarefaModel.finalizada;
            return tarefas[indice];
        }
        else {
            return null;
        }
    }

    //método para excluir uma tarefa - como não há bd, excluiremos a exibição.
    static excluir(id) {
        const indice = tarefas.findIndex(t => t.id === parseInt(id));
        //se o index não é encontrado ( posição ) o valor de index será -1.
        if (indice !== -1) {
            const tarefa = tarefas[indice];
            tarefas = tarefas.filter(t => t.id !== parseInt(id));
            return tarefa;
        }
        else {
            return null;
        }
    }


    //método para buscar 1 tarefa através do id
    static obterPorId(id) {
        const indice = tarefas.findIndex(t => t.id === parseInt(id));
        if (indice !== -1) {
            return tarefas[indice];
        }
        else {
            return null;
        }
    }




}


//tornando a classe pública
module.exports = TarefaService;
