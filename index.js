const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routers/product.route.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("<h1> Sarvin and</h1></h2> Sayeh</h2>");
});


mongoose
  .connect(
   /Node-API?retryWrites=true&w=majority&appName=crud"
  )

  .then(() => {
    console.log("Connected to the Database");
    app.listen(3000, () => {
      console.log("sayeh is cool");
    });
  })
  .catch(() => {
    console.log("data wrong");
  });
