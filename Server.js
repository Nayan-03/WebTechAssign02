let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const URL =
  "mongodb+srv://Nayan18:nayan181818@cluster0.bisr1xp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const jwt = require("jsonwebtoken");
const productRoute = require("./Routes/ProductRouter");
const orderRoute = require("./Routes/OrderRouter");
const userRoute = require("./Routes/UserRouter");
const cartRoute = require("./Routes/CartRouter");
const commentRoute = require("./Routes/CommentRouter");

// Initialize the app
let app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// setup for connection with MongoDB
mongoose
  .connect(URL)
  .then(() => console.log("Successfully Connected to Nayan's DB"))
  .catch((err) => console.error("Error:-", err));

var db = mongoose.connection;

//set routes for other APIs
app.use("/products", productRoute);
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.use("/comments", commentRoute);
app.use("/carts", cartRoute);

// set port number = 3000 for this server
app.listen(PORT, "0.0.0.0", function () {
  console.log(`Server is running on Port: ${PORT}`);
});
