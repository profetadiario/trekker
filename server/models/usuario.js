const mongoose = require('mongoose');
const trekker = new mongoose.Schema({
    name: String,
    idTrilha: String,
    localizacao: {
        latitude: Number,
        longitude: Number,
    }
})

mongoose.model('usuario', trekker);