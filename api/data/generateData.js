import fs from "fs";
import path from "path";
import { majorArcana, suits, court, numerals } from "./tarotDetails.js";

const NUM_CARDS = 78;

const createCard = (id, name, valueInt, type) => {
  return {
    id,
    name,
    icons: null,
    upright: {
      keywords: "",
      description: "",
    },
    reversed: {
      keywords: "",
      description: "",
    },
    valueInt,
    type,
  };
};
const updateForMinorArcana = (card, suit, value) => {
  card.icons = {
    value: value ? value.toLowerCase() : null,
    suit: suit.toLowerCase(),
  };
  return card;
};

const structureData = () => {
  let cardData = [];
  let id = 0;
  //for (let i = 0; i < NUM_CARDS; i++) {
  majorArcana.forEach((major, majorInteger) => {
    cardData.push(createCard(id, major, majorInteger, "major"));
    id++;
  });
  suits.forEach(suit => {
    let ace = createCard(id, `Ace of ${suit}`, 1, "minor");
    id++;
    cardData.push(updateForMinorArcana(ace, suit, "A"));
    numerals.forEach((number, numInteger) => {
      let card = createCard(
        id,
        `${number} of ${suit}`,
        numInteger + 2,
        "minor"
      );
      cardData.push(updateForMinorArcana(card, suit));
      id++;
    });
    court.forEach((person, courtInteger) => {
      let card = createCard(
        id,
        `${person} of ${suit}`,
        courtInteger + 11,
        "minor"
      );
      cardData.push(updateForMinorArcana(card, suit, person));
      id++;
    });
  });
  console.log(cardData);
  saveToFile(cardData);
};

const saveToFile = data => {
  const __dirname = path.resolve();
  fs.writeFile(
    __dirname + `/data/initialData.js`,
    `const cardData =
      ${JSON.stringify(data)}
    export default cardData`,
    err => {
      if (err) console.error(err);
      else {
        console.log(`cardData.js written successfully\n`);
      }
    }
  );
};

(() => {
  console.log("starting generation");
  structureData();
})();
