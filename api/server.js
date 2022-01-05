import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cardsRouter from "./routes/cards.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Tarot Journal API is running");
});

app.use("/cards", cardsRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
