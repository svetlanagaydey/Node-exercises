const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const Product = require('./models/product')
const Schema = mongoose.Schema;

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({})
        res.send(products);
    } catch(e) {
        res.status(500).send();
    }
})

app.get('/products/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const product = await Product.findById(_id);
        if(!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch(e) {
        res.status(500).send();
    }
})

app.get('/actives', async(req, res) => {
    try {
        const products = await Product.find({isActive: true});
        res.send(products);
    } catch(e) {
        res.status(500).send();
    }
})

app.get('/products_price_range', async(req, res) => {
    const priceFrom = req.body.priceFrom;
    const priceTo = req.body.priceTo;
    try {
        const products = await Product.find({"details.price": {$lt: priceTo, $gt: priceFrom}})
        res.send(products);
    } catch(e) {
        res.status(500).send()
    }
})

app.post('/products', async(req, res) => {
    const product = new Product(req.body);
    try {
        await product.save()
        res.status(201).send(product)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.patch('/products/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allawedUpdates = ['name', 'category', 'isActive', 'details.description', 'details.price', 'details.discount', 'details.images', 'details.phone'];
    const isValidOperation = updates.every((update) => allawedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!"})
    }
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!product) {
            return res.status(400).send();
        }
        res.send(product);   
    } catch(e) {
     res.status(400).send(e)
    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product) {
            return res.status(404).send();
        }
        res.send(product);
    } catch(e) {
        res.status(500).send();
    }
})

app.delete('/products', async(req, res) => {
    try {
        const products = await Product.deleteMany({})
        res.send(products);
    } catch(e) {
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})