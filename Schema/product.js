const mongoose = require("mongoose");

// Model of Product
const productModel = new mongoose.Schema({
  description: String,
  image: String,
  pricing: Number,
  shippingCost: Number,
});

const Product = mongoose.model("Product", productModel);
module.exports = Product;
