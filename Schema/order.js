

// Model of Order
const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true},
    quantity: {
        type: Number,
        default: 1,
        validate: {
          validator: function (value) {
            return value >= 1;
          },
          message: "Order product quantity is atleast one...",
        },
      },
    orderDate: Date
});

const Order = mongoose.model('Order', orderModel);

module.exports = Order;