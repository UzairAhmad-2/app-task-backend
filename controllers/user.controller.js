const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).send(error.message);
  }
};