import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

// Configurations
dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;
    console.log("text", text)
    res.status(200).json({ text })

  }
  catch (error) {
    console.log("error", error)
    res.status(500).json({ error: error.message })
  }
})

export default router;