const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    //listar
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },
    //procurar um só
    async show(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },
    //criar
    async store(req, res) {
        const user = await User.create(req.body);
        User.findById(user);
        return res.json(user._id);
    },
    //update
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    },
    //delete
    async destroy(req, res) {
        await User.findByIdAndDelete(req.params.id);
        return res.send();
    },
    

};