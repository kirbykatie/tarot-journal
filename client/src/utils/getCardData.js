const cardData = [
  {
    id: "swkn",
    name: "Knight of Swords",
    icons: {
      value: "knight",
      suit: "sword",
    },
    upright: {
      keywords: "Ambitious, action-oriented, driven to succeed, fast-thinking",
      description: "",
    },
    reversed: {
      keywords: "Restless, unfocused, impulsive, burn-out",
      description: "",
    },
    valueInt: 12,
    type: "minor",
  },
  {
    id: "cu05",
    name: "Five of Cups",
    icons: {
      value: null,
      suit: "cup",
    },
    upright: {
      keywords: "Regret, failure, disappointment, pessimism",
      description: "",
    },
    reversed: {
      keywords: "Personal setbacks, self-forgiveness, moving on",
      description: "",
    },
    valueInt: 5,
    type: "minor",
  },
  {
    id: "wa07",
    name: "Seven of Wands",
    icons: {
      value: null,
      suit: "wand",
    },
    upright: {
      keywords: "Challenge, competition, protection, perseverance",
      description: "",
    },
    reversed: {
      keywords: "Exhaustion, giving up, overwhelmed",
      description: "",
    },
    valueInt: 7,
    type: "minor",
  },
  {
    id: "ma08",
    name: "Strength",
    upright: {
      keywords: "Strength, courage, persuasion, influence, compassion",
      description: "",
    },
    reversed: {
      keywords: "Inner strength, self-doubt, low energy, raw emotion",
      description: "",
    },
    valueInt: 8,
    type: "major",
  },
  {
    id: "ma22",
    name: "The World",
    upright: {
      keywords: "Completion, integration, accomplishment, travel",
      description: "",
    },
    reversed: {
      keywords: "Seeking personal closure, short-cuts, delays",
      description: "",
    },
    valueInt: 22,
    type: "major",
  },
];

export default id => {
  return cardData.filter(card => card.id === id)[0];
};
