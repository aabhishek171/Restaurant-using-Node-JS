const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/foodOrders",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connected successfully");
    } else {
      console.log("error: " + err);
    }
  }
);

require("./order.model");
