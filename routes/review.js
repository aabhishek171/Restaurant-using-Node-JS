const express = require("express");
const foodController = require("../controllers/food");
const router = express.Router();

router.get("/review", foodController.reviewFood);
router.post("/home", foodController.reviewPostFood);
module.exports = router;
