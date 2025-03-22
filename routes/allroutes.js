const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/add/product", createProduct);  // Create a product
router.get("/get/products", getProducts);  // Get all products
router.get("/get/product/:id", getProductById);  // Get a single product by ID
router.put("/products/:id", updateProduct);  // Update a product
router.delete("/products/:id", deleteProduct);  // Delete a product

module.exports = router;
