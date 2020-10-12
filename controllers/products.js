const Product = require("../models/products");
const product = [];

exports.addProductForm = (req, res, next) => {
  res.render("add-product", {
    title: "Add-product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body);
  products.add();
  res.redirect("/");
};

exports.fetchAllProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("store", {
      prod: products,
      title: "Home Page",
      path: "/",
    });
  });
};

exports.fetchProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.fetchById(prodId,(product)=>{
    res.render('product-details',{
      prod:product,
      title:"Product Details",
      path:"/products/id"
    });
  });
};
