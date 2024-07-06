// Model of User 
const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    purchaseHistory: String,
    shippingAddress: String
});

const User = mongoose.model('User', userModel);
module.exports = User;
