const mongoose = require('mongoose')
//const validator = require('validator')

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        // validate(value) {
        //   if(value < 0) {
        //     throw new Error ("Price can't be negative")
        //     //console.log("Price can't be negative")
        //   }
        // }
        min: 1,
      }
})

module.exports = Product;