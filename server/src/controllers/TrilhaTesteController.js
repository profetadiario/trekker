const mongoose = require('mongoose');

const TrilhaTeste = mongoose.model('TrilhaTeste');

module.exports ={
    //listar
    async index(req, res){
        const trilhas = await TrilhaTeste.find();

        return res.json(trilhas);
    },
    //procurar um só
    async show(req, res){
        const trilha = await TrilhaTeste.findById(req.params.id);

        return res.json(trilha);
    },
    //criar
    async store(req,res){
        const trilha = await TrilhaTeste.create(req.body);

        return res.json(trilha);
    },
    //update
    async update(req,res){
        const trilha = await TrilhaTeste.findByIdAndUpdate(req.params.id,req.body, {new:true});
       
        return res.json(trilha);
    },
    //delete
    async destroy(req,res){
        await TrilhaTeste.findByIdAndDelete(req.params.id);
        return res.send();
        
    },

};