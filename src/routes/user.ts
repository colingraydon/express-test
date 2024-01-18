import express from "express";

const router = express.Router();

import {
  createUser,
  deleteProduct,
  getAllUsers,
  getProduct,
} from "../controllers/products";

router.get("/", getAllUsers);

router.get("/:productID", getProduct);

router.post("/", createUser);

// router.put("/:productID", updateProduct);

router.delete("/:productID", deleteProduct);

export default router;
