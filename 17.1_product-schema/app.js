const { connect } = require("mongoose");
const Product = require("./productSchema.js");
const products = require("./products.js")

connect(
  "mongodb://localhost/e-commerce",
  //'mongodb://127.0.0.1:27017/e-commerce'
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);
const addProducts = async (products) => {
    try {
      const createProducts = await Product.create(products);
      console.log(createProducts);
      console.log("Products Created");
    } catch (e) {
      console.log(e);
    }
  };

addProducts(products);