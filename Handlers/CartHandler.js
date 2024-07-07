// Cart API
const Cart = require("../Schema/cart");

// GET
exports.getProductsFromCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    if (carts.length === 0) {
      return res
        .status(404)
        .json({ message: "No Products found in your cart!!" });
    }
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET
exports.getProductByCartId = async (req, res) => {
  try {
    console.log(req.params.id);
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Required cart is not founded!!" });
    }
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
exports.addProductInCart = async (req, res) => {
  const cart = new Cart({
    productId: req.body.productId,
    quantity: req.body.quantity,
    userId: req.body.userId,
  });

  try {
    const newCart = await cart.save();
    if (newCart) {
      res
        .status(201)
        .json({ message: "Product added in cart added successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
exports.updateProductInCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCart) {
      return res
        .status(404)
        .json({
          message:
            "product in your cart is not founded, please check your product!!",
        });
    }
    res.status(200).json({ message: "Product updated  successfully!!!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteAllProductsInCart = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCart) {
      return res.status(404).json({ message: "Something went wrong!!" });
    }
    res.status(200).json({ message: "Product deleted successfully from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
