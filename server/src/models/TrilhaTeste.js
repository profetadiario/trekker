const mongoose = require('mongoose');

const TrilhaTesteSchema = new mongoose.Schema({
    title: String,
    coodernadasCamera: {
        latitute: Number,
        longitude: Number
    },
    geometryPropietes: Object,
    detailsTrilha: {
        observations: String,
        difficult: String,
        distance: String,
    }
});

mongoose.model('TrilhaTeste', TrilhaTesteSchema);