const mongoose = require('mongoose')
//const validator = require('validator')

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        unique: true,
      },
      category: {
        type: String,
        required: true,
      },
      isActive: Boolean,
      details: 
      {
        description: {
          type: String,
          minlength: 10,
        },
        price: {
          type: Number,
          required: true,
          validate(value) {
            if(value < 0) {
              throw new Error ("Price can't be negative")
              //console.log("Price can't be negative")
            }
          }
         // min: 1,
        },
        discount: {
          type: Number,
          default: 0,
        },
        images: {
          type: Array,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        dataAdded: {
          type: Date,
          default: () => Date.now(),
        },
      }
})

module.exports = Product;