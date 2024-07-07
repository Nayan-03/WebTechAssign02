const express = require("express");
let router = express.Router();
const orderAPIHandler = require("../Handlers/OrderHandler");

// Routes
router.get("/", orderAPIHandler.getAllOrdersOfProducts);
router.get("/:id", orderAPIHandler.getOrderById);
router.post("/", orderAPIHandler.createOrder);
router.put("/:id", orderAPIHandler.updateOrder);
router.delete("/:id", orderAPIHandler.deleteOrder);

// Export API routes
module.exports = router;
