import express from "express";
import { createProduct, getAllProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add/product", createProduct);
router.get("/products", getAllProducts);

export default router;