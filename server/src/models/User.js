const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    coordinates: {
        latitute: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    },
    idTrilha: {
        type: Number,
    }
});

mongoose.model('User', UserSchema);