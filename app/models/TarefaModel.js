/*
classe para modelar os dados da tarefa na API
*/

class TarefaModel{
    constructor({
        descricao,// descrição da tarefa
        finalizada, // status
    }){
        this.descricao =descricao || null ;
        this.finalizada = finalizada || false;
    }
}
module.exports = TarefaModel;