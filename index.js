const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Sarvin and</h1></h2> Sayeh</h2>");
});

app.get("/api/products", async (req, res) => {
  try {
    // const product = await Product.create(req.body);
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: "product not found" });
    }
    const updatedProductDB = await Product.findById(id);
    res.status(200).json(updatedProductDB);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Deleted " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv:///Node-API?retryWrites=true&w=majority&appName=crud"
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
