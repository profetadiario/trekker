const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Iniciando o servidor
const app = express();

//Iniciando o DB
const mongoURL = 'mongodb+srv://jonatheloo:ZIXYrFIq8my6usn7@cluster0.rehym.mongodb.net/test';

mongoose.connect(
    mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

mongoose.connection.on('conected', () => {
    console.log("Conectado");
});
mongoose.connection.on('error', (err) => {
    console.log("Error", err);
});

//Primeira rota
app.get('/', (req, res) => {
    res.send('Welcome to node js')
});

app.listen(3001, () => {
    console.log("server runnig")
});



//mongodb+srv://jonatheloo:<password>@cluster0.kjr2g.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
//oaTKQe4wTdhM46dD 