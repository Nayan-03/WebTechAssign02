const express = require("express");
let router = express.Router();
const cartApiHandler = require("../Handlers/CartHandler");

// Routes
router.get("/", cartApiHandler.getProductsFromCart);
router.get("/:id", cartApiHandler.getProductByCartId);
router.post("/", cartApiHandler.addProductInCart);
router.put("/:id", cartApiHandler.updateProductInCart);
router.delete("/:id", cartApiHandler.deleteAllProductsInCart);

module.exports = router;
