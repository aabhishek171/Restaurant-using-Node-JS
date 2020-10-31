const Food = require("../models/food");

exports.foodHome = (req, res, next) => {
  res.render("home", {
    title: "Food Style",
    path: "/",
  });
};

exports.returnHome = (req, res, next) => {
  res.render("home", {
    title: "Food Style",
    path: "/home",
  });
};

exports.foodMenu = (req, res, next) => {
  res.render("menu", {
    title: "Menu",
    path: "/menu",
  });
};

exports.orderFood = (req, res, next) => {
  res.render("order", {
    title: "Order",
    path: "/order",
  });
};

exports.orderPostFood = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const veg = req.body.veg;
  const nonveg = req.body.nonveg;
  const dessert = req.body.dessert;
  const foodorder = new Food({
    name: name,
    email: email,
    phone: phone,
    address: address,
    veg: veg,
    nonveg: nonveg,
    dessert: dessert,
  });

  foodorder
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.json({
        status: "error",
        message: "Can't order food",
      });
    });
};

exports.reviewFood = (req, res, next) => {
  res.render("review", {
    title: "Review Food",
    path: "/review",
  });
};

exports.reviewPostFood = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const comments = req.body.comments;
  const review = new Food({
    name: name,
    email: email,
    phone: phone,
    comments: comments,
  });

  review
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.json({
        status: "error",
        message: "Can't add review",
      });
    });
};
