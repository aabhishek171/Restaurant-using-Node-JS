const express = require("express");
const foodController = require("../controllers/food");
const router = express.Router();

router.get("/order", foodController.orderFood);
router.post("/home", foodController.orderPostFood);
module.exports = router;
