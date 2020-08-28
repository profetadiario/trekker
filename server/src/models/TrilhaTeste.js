const mongoose = require('mongoose');

const TrilhaTesteSchema = new mongoose.Schema({
    title: String,
    coodernadasCamera: {latitute:Number,longitude:Number},
    geometryPropietes: Object,

});

mongoose.model('TrilhaTeste', TrilhaTesteSchema);