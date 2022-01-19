const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const Product = require('./models/product')
const Schema = mongoose.Schema;

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/products', (req, res) => {
    Product.find({}).then((products) => {
        res.send(products);
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/products/:id', (req, res) => {
    const _id = req.params.id;
    Product.findById(_id).then((product) => {
        if(!product) {
            return res.status(404).send();
        }
        res.json(product);
    }).catch((e) => {
        res.status(500).send()
    });
})

app.get('/actives', (req, res) => {
    Product.find({isActive: false}).then((products) => {
        res.send(products);
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/products', (req, res) => {
    const product = new Product(req.body)
    product.save().then(() => {
        res.status(201).send(product)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})