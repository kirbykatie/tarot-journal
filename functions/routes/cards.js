import express from "express";
import cardData from "../data/cardData.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(cardData);
});

router.get("/:card", (req, res, next) => {
  const requestedCard = Number(req.params.card);
  res.json(cardData.filter(card => card.id === requestedCard)[0]);
});

export default router;
