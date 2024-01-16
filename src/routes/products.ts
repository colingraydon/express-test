import express from "express";

const router = express.Router();

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";

router.get("/", getProducts);

router.get("/:productID", getProduct);

router.post("/", createProduct);

router.put("/:productID", updateProduct);

router.delete("/:productID", deleteProduct);

export default router;
