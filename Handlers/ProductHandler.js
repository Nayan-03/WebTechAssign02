// Product API
const Product = require("../Schema/product");

// GET
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No any products found" });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
exports.createProduct = async (req, res) => {
  const product = new Product({
    description: req.body.description,
    image: req.body.image,
    pricing: req.body.pricing,
    shippingCost: req.body.shippingCost,
  });

  try {
    const newProduct = await product.save();
    if (newProduct) {
      res.status(200).json({ message: "Product added successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const updateExistingProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateExistingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const deleteExistingProduct = await Product.findByIdAndDelete(
      req.params.id
    );
    if (!deleteExistingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
