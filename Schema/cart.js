const mongoose = require("mongoose");

// Model of Cart
const cartModel = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        validate: {
          validator: function (value) {
            return value >= 1;
          },
          message: "Add atleast one product!!",
        },
      },
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Cart = mongoose.model("Cart", cartModel);

module.exports = Cart;