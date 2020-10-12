const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) return cb([]);
    else return cb(JSON.parse(data));
  });
};

class Product {
  constructor(obj) {
    this.name = obj.name;
    this.brand = obj.brand;
    this.price = obj.price;
  }

  add() {
    fs.readFile(filePath, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }

      this.id = Math.random().toString();
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchById(id,cb) {
    getProductsFromFile((products)=>{
      const product = products.filter((p)=>{return p.id===id});
      cb(product);
    });
    
  }
}

module.exports = Product;
