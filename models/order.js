const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodorderSchema = new Schema({
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

module.exports = mongoose.model("Foodorder", foodorderSchema);
