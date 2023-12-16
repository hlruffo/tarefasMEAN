const express = require('express');
const bodyParser = require('body-parser')
const tarefaRouter = require('./app/routes/TarefaRouter')

const app =express();

const port = 3000;

app.use(bodyParser.json());
app.use('/api/tarefas', tarefaRouter)

app.listen(port, () =>{
    console.log("Servidor sendo executado em localhost:3000");
})