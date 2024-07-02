const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/appdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
