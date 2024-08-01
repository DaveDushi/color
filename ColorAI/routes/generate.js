import express from "express";
import { generate, getUsers } from "../controllers/generateController.js";

const router = express.Router();

router.post("/submit", generate);

router.get("/users", getUsers);

export default router;
