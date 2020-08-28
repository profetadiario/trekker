const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports ={
    //listar
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },
    //procurar um só
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //criar
    async store(req,res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    //update
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true});
       
        return res.json(product);
    },
    //delete
    async destroy(req,res){
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
        
    },

};