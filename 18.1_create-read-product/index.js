const express = require('express')
require('./db/mongoose')
const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/products', (req, res) => {
    const product = new Product(req.body)

    product.save().then(() => {
        res.send(product)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})