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
        res.status(400).send(e)
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