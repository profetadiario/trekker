const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://192.168.0.101:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//chamando o diretório de models
requireDir('./src/models');

const Product = mongoose.model('Product');
const TrilhaTeste = mongoose.model('TrilhaTeste');

//Primeira rota
app.use('/', require('./src/routes'));

app.listen(3001);