const express = require("express");
const router = express.Router();

const tarefaService = require('../services/TarefaService')
const TarefaModel = require('../models/TarefaModel')


//GET /api/tarefas/
router.get('/', (req,res)=>{
     const tarefas = tarefaService.obterTodos();
     res.status(200).json(tarefas);

});


//POST /api/tarefas/
router.post('/', (req,res)=>{
    const model = new TarefaModel( req.body);
    const tarefa = tarefaService.incluir(model);
    res.status(201).json(tarefa);
});

//PUT /api/tarefas/:id
router.put('/:id', (req,res)=>{
    const id = req.params.id;
    const model = new TarefaModel( req.body);
    const tarefa = tarefaService.alterar(id, model);
    res.status(202).json(tarefa);

});

//DELETE /api/tarefas/:id
router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const tarefa = tarefaService.excluir(id);
    res.status(204).json(tarefa);
});

//GET /api/tarefas/:id
router.get('/:id', (req,res)=>{
    const id = req.params.id;
    const tarefa = tarefaService.obterPorId(id);
    res.status(200).json(tarefa);
});

module.exports = router;