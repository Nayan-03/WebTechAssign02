const express = require('express');
let router = express.Router();
const productAPIHandler = require('../Handlers/ProductHandler');


// Routes
router.get('/', productAPIHandler.getAllProducts);
router.get('/:id', productAPIHandler.getProductById);
router.post('/', productAPIHandler.createProduct);
router.put('/:id', productAPIHandler.updateProduct);
router.delete('/:id', productAPIHandler.deleteProduct);

// Export API routes
module.exports = router;