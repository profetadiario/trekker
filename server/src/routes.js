const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const TrilhaTesteController = require('./controllers/TrilhaTesteController');
//Rotas para o db

//rota de listar todos
routes.get('/products', ProductController.index);
//rota de pegar só um
routes.get('/products/:id', ProductController.show);
//rota para criar
routes.post('/products', ProductController.store);
//rota pra atualizar
routes.put('/products/:id', ProductController.update);
//rota para deletar
routes.delete('/products/:id', ProductController.destroy);

//rota de listar todos
routes.get('/trilhas', TrilhaTesteController.index);
//rota de pegar só um
routes.get('/trilhas/:id', TrilhaTesteController.show);
//rota para criar
routes.post('/trilhas', TrilhaTesteController.store);
//rota pra atualizar
routes.put('/trilhas/:id', TrilhaTesteController.update);
//rota para deletar
routes.delete('/trilhas/:id', TrilhaTesteController.destroy);


module.exports = routes;