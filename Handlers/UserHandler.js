// User API
const User = require("../Schema/user");
const bcrypt = require("bcryptjs");

// GET
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
exports.createUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    username: req.body.username,
    purchaseHistory: req.body.purchaseHistory,
    shippingAddress: req.body.shippingAddress,
  });

  try {
    const newUser = await user.save();
    if (newUser) {
      res.status(201).json({ message: "User created successfully!!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const { email, password, username, purchaseHistory, shippingAddress } =
      req.body;
      let updateFields = { email, username, purchaseHistory, shippingAddress };
      
      if (password) {
        updateFields.password = await bcrypt.hash(password, 8);
      }

    const updateExistingUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );
    if (!updateExistingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    const deleteExistingUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteExistingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
