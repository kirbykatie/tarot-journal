import functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cardData from "./data/cardData.js";
import journalData from "./data/journalData.js";

//initialize firebase inorder to access its services
//admin.initializeApp(functions.config().firebase);
admin.initializeApp();

//initialize express server
const app = express();
const main = express();

//add the path to receive request and set json as bodyParser to process the body
main.use("/api/", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//initialize the database and the collection
//const db = admin.firestore();
//const userCollection = 'users';

app.get("/", (req, res) => {
  res.send("Tarot Journal API is running");
});

//app.use("/cards", cardsRouter);
app.get("/cards", (req, res, next) => {
  res.json(cardData);
});
//app.use("/entries", journalRouter);
app.get("/entries", (req, res, next) => {
  res.json(journalData);
});
//define google cloud function name
export const webApi = functions.https.onRequest(main);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/*
TODO:
- set up functions - copying over express server logic
  https://medium.com/@savinihemachandra/creating-rest-api-using-express-on-cloud-functions-for-firebase-53f33f22979c
- confirm functions are working
- set up firestore
- put in dummy data
*/

/*
in ../firebase.json
"functions": {
    "predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint"
    ]
  },
*/
