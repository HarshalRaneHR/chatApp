import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersforSideBar,
  getMessages,
  sentMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersforSideBar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sentMessage);

export default router;
