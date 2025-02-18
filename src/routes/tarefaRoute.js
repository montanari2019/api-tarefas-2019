const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')
const apiController = require('../controllers/apiController')
const tarefaValidation = require('../util/tarefaValidation')

route.get('/?',           apiController.verificar, tarefaValidation.listarPorDescricao, tarefaController.listarPorDescricao)
route.get('/pagination',  apiController.verificar, tarefaController.listarperpage)
route.get('/data/:data?', apiController.verificar, tarefaValidation.listarPorDatas,tarefaController.listarPorDatas)
route.get('/',            apiController.verificar, tarefaController.listar)
route.get('/:id',         apiController.verificar, tarefaValidation.listarPorId ,tarefaController.listarPorId)
route.get('/data/?',      apiController.verificar, tarefaValidation.listarPorDt, tarefaController.listarPorDt)
route.post('/',           apiController.verificar, tarefaValidation.inserir, tarefaController.inserir)
route.put('/:id',         apiController.verificar, tarefaValidation.alterar ,tarefaController.alterar)
route.delete('/:id',      apiController.verificar, tarefaValidation.deletar, tarefaController.deletar)

module.exports = route