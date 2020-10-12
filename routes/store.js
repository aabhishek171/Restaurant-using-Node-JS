const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

router.get("/", productController.fetchAllProducts);
router.get("/products/:productId", productController.fetchProduct);

module.exports = router;

