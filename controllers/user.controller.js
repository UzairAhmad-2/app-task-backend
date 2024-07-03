const User = require("../models/User");

exports.createUser = async (req, res) => {
  console.log("Creating user...");
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

exports.getUserByFirebaseId = async (req, res) => {
  console.log("Getting user by Firebase ID...");
  try {
    const { firebaseId } = req.params;
    const user = await User.findOne({ firebaseId });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user by Firebase ID:", error);
    res.status(400).send(error.message);
  }
};

exports.updateUserByFirebaseId = async (req, res) => {
  console.log("Updating user by Firebase ID...");
  try {
    const { firebaseId } = req.params;
    const data = req.body;
    const user = await User.findOneAndUpdate({ firebaseId }, data, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user by Firebase ID:", error);
    res.status(400).send(error.message);
  }
};
