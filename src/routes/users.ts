import express from "express";

const router = express.Router();

import {
  createNotification,
  createUser,
  deleteUser,
  getAllUsers,
  getNotificationsByUser,
} from "../controllers/users";

router.get("/:username", getNotificationsByUser);
router.post("/:username/", createNotification);
router.delete("/:userID", deleteUser);

router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
