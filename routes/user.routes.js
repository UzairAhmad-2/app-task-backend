const {
  createUser,
  getUserByFirebaseId,
  updateUserByFirebaseId,
} = require("../controllers/user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/:firebaseId", getUserByFirebaseId);
router.put("/:firebaseId", updateUserByFirebaseId);

module.exports = router;
