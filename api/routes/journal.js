import express from "express";
import journalData from "../data/journalData.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(journalData);
});

export default router;