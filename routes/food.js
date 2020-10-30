const express = require("express");
const foodController = require("../controllers/food");
const router = express.Router();

router.get("/", foodController.foodHome);
router.get("/home", foodController.returnHome);
router.get("/menu", foodController.foodMenu);
module.exports = router;
