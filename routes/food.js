const express = require("express");
const foodController = require("../controllers/food");
const router = express.Router();

router.get("/", foodController.foodHome);
router.get("/home", foodController.returnHome);
router.get("/menu", foodController.foodMenu);

router.get("/order", foodController.orderFood);
router.post("/foodorders", foodController.orderPostFood);

router.get("/review", foodController.reviewFood);
router.post("/reviews", foodController.reviewPostFood);

module.exports = router;
