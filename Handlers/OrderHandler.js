// Order API
const Order = require('../Schema/order');

// GET
exports.getAllOrdersOfProducts = async (req, res) => {
    try {
        const orders = await Order.find();
        if (orders.length === 0) {
            return res.status(404).json({ message: 'User has no any orders!!' });
        }
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Required Order is not founded' });
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE
exports.createOrder = async (req, res) => {
    const order = new Order({
        userId: req.body.userId,
        productId: req.body.productId,
        quantity: req.body.quantity,
        orderDate: req.body.orderDate
    });

    try {
        const newOrder = await order.save();
        res.status(201).json({ message: 'Order added successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Required Order is not founded' });
        }
        res.status(200).json({ message: 'Order updated successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE
exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Required Order is not founded' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};