const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const storeRoutes = require("./routes/store");
const path = require("path");

const app = express(); //initializing express object

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(storeRoutes);

app.use((req, res, next) => {
  res.render("404", { title: "Error" });
});

app.listen(5000);
