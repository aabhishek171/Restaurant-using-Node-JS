const express = require("express");
const bodyParser = require("body-parser");
const foodRoutes = require("./routes/food");
//const orderRoutes = require("./routes/order");
//const reviewRoutes = require("./routes/review");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "Views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(foodRoutes);
//app.use(orderRoutes);
//app.use(reviewRoutes);

mongoose
  .connect("mongodb://localhost:27017/myRestaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(8000, () => {
      console.log("server started on 8000");
    });
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("can't connect to databse", err);
  });
