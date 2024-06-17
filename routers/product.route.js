const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");

const {
  deleteProducts,
  createProducts,
  updateProducts,
  findByIdProducts,
  findProducts,
} = require("../controllers/product.controller.js");


// Route mappings

router.get("/", findProducts);             // GET all products
router.get("/:id", findByIdProducts);      // GET product by ID
router.post("/", createProducts);          // POST create a new product
router.put("/:id", updateProducts);         // PUT update product by ID
router.delete("/:id", deleteProducts);     // DELETE product by ID

module.exports = router;