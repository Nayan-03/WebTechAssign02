const express = require("express");
let router = express.Router();
const userAPIHandler = require("../Handlers/UserHandler");

// Routes
router.get("/", userAPIHandler.getAllUsers);
router.get("/:id", userAPIHandler.getUserById);
router.post("/", userAPIHandler.createUser);
router.put("/:id", userAPIHandler.updateUser);
router.delete("/:id", userAPIHandler.deleteUser);

// Export API routes
module.exports = router;
