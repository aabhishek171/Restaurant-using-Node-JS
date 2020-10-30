const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  veg: {
    type: String,
    required: true,
  },
  nonveg: {
    type: String,
    required: true,
  },
  dessert: {
    type: String,
    required: true,
  },
});

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("order", foodSchema);
module.exports = mongoose.model("review", reviewSchema);
