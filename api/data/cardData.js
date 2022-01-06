const cardData = [
  {
    id: 0,
    name: "The Fool",
    icons: null,
    upright: {
      keywords: "Beginnings, innocence, spontaneity, a free spirit",
      description: "",
    },
    reversed: {
      keywords: "Holding back, recklessness, risk-taking",
      description: "",
    },
    valueInt: 0,
    type: "major",
  },
  {
    id: 1,
    name: "The Magician",
    icons: null,
    upright: {
      keywords: "Manifestation, resourcefulness, power, inspired action",
      description: "",
    },
    reversed: {
      keywords: "Manipulation, poor planning, untapped talents",
      description: "",
    },
    valueInt: 1,
    type: "major",
  },
  {
    id: 2,
    name: "The High Priestess",
    icons: null,
    upright: {
      keywords:
        "Intuition, sacred knowledge, divine feminine, the subconscious mind",
      description: "",
    },
    reversed: {
      keywords: "Secrets, disconnected from intuition, withdrawal and silence",
      description: "",
    },
    valueInt: 2,
    type: "major",
  },
  {
    id: 3,
    name: "The Empress",
    icons: null,
    upright: {
      keywords: "Femininity, beauty, nature, nurturing, abundance",
      description: "",
    },
    reversed: {
      keywords: "Creative block, dependence on others",
      description: "",
    },
    valueInt: 3,
    type: "major",
  },
  {
    id: 4,
    name: "The Emperor",
    icons: null,
    upright: {
      keywords: "Authority, establishment, structure, a father figure",
      description: "",
    },
    reversed: {
      keywords:
        "Domination, excessive control, lack of discipline, inflexibility",
      description: "",
    },
    valueInt: 4,
    type: "major",
  },
  {
    id: 5,
    name: "The Hierophant",
    icons: null,
    upright: {
      keywords:
        "Spiritual wisdom, religious beliefs, conformity, tradition,institutions",
      description: "",
    },
    reversed: {
      keywords: "Personal beliefs, freedom, challenging the status quo",
      description: "",
    },
    valueInt: 5,
    type: "major",
  },
  {
    id: 6,
    name: "The Lovers",
    icons: null,
    upright: {
      keywords: "Love, harmony, relationships, values alignment, choices",
      description: "",
    },
    reversed: {
      keywords: "Self-love, disharmony, imbalance, misalignment of values",
      description: "",
    },
    valueInt: 6,
    type: "major",
  },
  {
    id: 7,
    name: "The Chariot",
    icons: null,
    upright: {
      keywords: "Control, willpower, success, action, determination",
      description: "",
    },
    reversed: {
      keywords: "Self-discipline, opposition, lack of direction",
      description: "",
    },
    valueInt: 7,
    type: "major",
  },
  {
    id: 8,
    name: "Strength",
    icons: null,
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
    id: 9,
    name: "The Hermit",
    icons: null,
    upright: {
      keywords: "Soul-searching, introspection, being alone, inner guidance",
      description: "",
    },
    reversed: {
      keywords: "Isolation, loneliness, withdrawal",
      description: "",
    },
    valueInt: 9,
    type: "major",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    icons: null,
    upright: {
      keywords: "Good luck, karma, life cycles, destiny, a turning point",
      description: "",
    },
    reversed: {
      keywords: "Bad luck, resistance to change, breaking cycles",
      description: "",
    },
    valueInt: 10,
    type: "major",
  },
  {
    id: 11,
    name: "Justice",
    icons: null,
    upright: {
      keywords: "Justice, fairness, truth, cause and effect, law",
      description: "",
    },
    reversed: {
      keywords: "Unfairness, lack of accountability, dishonesty",
      description: "",
    },
    valueInt: 11,
    type: "major",
  },
  {
    id: 12,
    name: "The Hanged Man",
    icons: null,
    upright: {
      keywords: "Pause, surrender, letting go, new perspectives",
      description: "",
    },
    reversed: {
      keywords: "Delays, resistance, stalling, indecision",
      description: "",
    },
    valueInt: 12,
    type: "major",
  },
  {
    id: 13,
    name: "Death",
    icons: null,
    upright: {
      keywords: "Endings, change, transformation, transition",
      description: "",
    },
    reversed: {
      keywords: "Resistance to change, personal transformation, inner purging",
      description: "",
    },
    valueInt: 13,
    type: "major",
  },
  {
    id: 14,
    name: "Temperance",
    icons: null,
    upright: {
      keywords: "Balance, moderation, patience, purpose",
      description: "",
    },
    reversed: {
      keywords: "Imbalance, excess, self-healing, re-alignment",
      description: "",
    },
    valueInt: 14,
    type: "major",
  },
  {
    id: 15,
    name: "The Devil",
    icons: null,
    upright: {
      keywords: "Shadow self, attachment, addiction, restriction, sexuality",
      description: "",
    },
    reversed: {
      keywords:
        "Releasing limiting beliefs, exploring dark thoughts, detachment",
      description: "",
    },
    valueInt: 15,
    type: "major",
  },
  {
    id: 16,
    name: "The Tower",
    icons: null,
    upright: {
      keywords: "Sudden change, upheaval, chaos, revelation, awakening",
      description: "",
    },
    reversed: {
      keywords: "Personal transformation, fear of change, averting disaster",
      description: "",
    },
    valueInt: 16,
    type: "major",
  },
  {
    id: 17,
    name: "The Star",
    icons: null,
    upright: {
      keywords: "Hope, faith, purpose, renewal, spirituality",
      description: "",
    },
    reversed: {
      keywords: "Lack of faith, despair, self-trust, disconnection",
      description: "",
    },
    valueInt: 17,
    type: "major",
  },
  {
    id: 18,
    name: "The Moon",
    icons: null,
    upright: {
      keywords: "Illusion, fear, anxiety, subconscious, intuition",
      description: "",
    },
    reversed: {
      keywords: "Release of fear, repressed emotion, inner confusion",
      description: "",
    },
    valueInt: 18,
    type: "major",
  },
  {
    id: 19,
    name: "The Sun",
    icons: null,
    upright: {
      keywords: "Positivity, fun, warmth, success, vitality",
      description: "",
    },
    reversed: {
      keywords: "Inner child, feeling down, overly optimistic",
      description: "",
    },
    valueInt: 19,
    type: "major",
  },
  {
    id: 20,
    name: "Judgement",
    icons: null,
    upright: {
      keywords: "Judgement, rebirth, inner calling, absolution",
      description: "",
    },
    reversed: {
      keywords: "Self-doubt, inner critic, ignoring the call",
      description: "",
    },
    valueInt: 20,
    type: "major",
  },
  {
    id: 21,
    name: "The World",
    icons: null,
    upright: {
      keywords: "Completion, integration, accomplishment, travel",
      description: "",
    },
    reversed: {
      keywords: "Seeking personal closure, short-cuts, delays",
      description: "",
    },
    valueInt: 21,
    type: "major",
  },
  {
    id: 22,
    name: "Ace of Wands",
    icons: { value: "a", suit: "wands" },
    upright: {
      keywords: "Inspiration, new opportunities, growth, potential",
      description: "",
    },
    reversed: {
      keywords: "An emerging idea, lack of direction, distractions, delays",
      description: "",
    },
    valueInt: 1,
    type: "minor",
  },
  {
    id: 23,
    name: "Two of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Future planning, progress, decisions, discovery",
      description: "",
    },
    reversed: {
      keywords:
        "Personal goals, inner alignment, fear of unknown, lack of planning",
      description: "",
    },
    valueInt: 2,
    type: "minor",
  },
  {
    id: 24,
    name: "Three of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Progress, expansion, foresight, overseas opportunities",
      description: "",
    },
    reversed: {
      keywords: "Playing small, lack of foresight, unexpected delays",
      description: "",
    },
    valueInt: 3,
    type: "minor",
  },
  {
    id: 25,
    name: "Four of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Celebration, joy, harmony, relaxation, homecoming",
      description: "",
    },
    reversed: {
      keywords:
        "Personal celebration, inner harmony, conflict with others, transition.",
      description: "",
    },
    valueInt: 4,
    type: "minor",
  },
  {
    id: 26,
    name: "Five of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Conflict, disagreements, competition, tension, diversity",
      description: "",
    },
    reversed: {
      keywords: "Inner conflict, conflict avoidance, tension release",
      description: "",
    },
    valueInt: 5,
    type: "minor",
  },
  {
    id: 27,
    name: "Six of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Success, public recognition, progress, self-confidence",
      description: "",
    },
    reversed: {
      keywords:
        "Private achievement, personal definition of success, fall from grace, egotism",
      description: "",
    },
    valueInt: 6,
    type: "minor",
  },
  {
    id: 28,
    name: "Seven of Wands",
    icons: { value: null, suit: "wands" },
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
    id: 29,
    name: "Eight of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Movement, fast paced change, action, alignment",
      description: "",
    },
    reversed: {
      keywords: "Delays, frustration, resisting change, internal alignment",
      description: "",
    },
    valueInt: 8,
    type: "minor",
  },
  {
    id: 30,
    name: "Nine of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Resilience, courage, persistence, test of faith, boundaries",
      description: "",
    },
    reversed: {
      keywords: "Inner resources, struggle, overwhelm, defensive, paranoia",
      description: "",
    },
    valueInt: 9,
    type: "minor",
  },
  {
    id: 31,
    name: "Ten of Wands",
    icons: { value: null, suit: "wands" },
    upright: {
      keywords: "Burden, extra responsibility, hard work, completion",
      description: "",
    },
    reversed: {
      keywords: "Doing it all, carrying the burden, delegation, release",
      description: "",
    },
    valueInt: 10,
    type: "minor",
  },
  {
    id: 32,
    name: "Page of Wands",
    icons: { value: "page", suit: "wands" },
    upright: {
      keywords:
        "Inspiration, ideas, discovery, limitless potential, free spirit",
      description: "",
    },
    reversed: {
      keywords:
        "Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path",
      description: "",
    },
    valueInt: 11,
    type: "minor",
  },
  {
    id: 33,
    name: "Knight of Wands",
    icons: { value: "knight", suit: "wands" },
    upright: {
      keywords: "Energy, passion, inspired action, adventure, impulsiveness",
      description: "",
    },
    reversed: {
      keywords: "Passion project, haste, scattered energy, delays, frustration",
      description: "",
    },
    valueInt: 12,
    type: "minor",
  },
  {
    id: 34,
    name: "Queen of Wands",
    icons: { value: "queen", suit: "wands" },
    upright: {
      keywords:
        "Courage, confidence, independence, social butterfly, determination",
      description: "",
    },
    reversed: {
      keywords:
        "Self-respect, self-confidence, introverted, re-establish sense of self",
      description: "",
    },
    valueInt: 13,
    type: "minor",
  },
  {
    id: 35,
    name: "King of Wands",
    icons: { value: "king", suit: "wands" },
    upright: {
      keywords: "Natural-born leader, vision, entrepreneur, honour",
      description: "",
    },
    reversed: {
      keywords: "Impulsiveness, haste, ruthless, high expectations",
      description: "",
    },
    valueInt: 14,
    type: "minor",
  },
  {
    id: 36,
    name: "Ace of Cups",
    icons: { value: "a", suit: "cups" },
    upright: {
      keywords: "Love, new relationships, compassion, creativity",
      description: "",
    },
    reversed: {
      keywords: "Self-love, intuition, repressed emotions",
      description: "",
    },
    valueInt: 1,
    type: "minor",
  },
  {
    id: 37,
    name: "Two of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Unified love, partnership, mutual attraction",
      description: "",
    },
    reversed: {
      keywords: "Self-love, break-ups, disharmony, distrust",
      description: "",
    },
    valueInt: 2,
    type: "minor",
  },
  {
    id: 38,
    name: "Three of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Celebration, friendship, creativity, collaborations",
      description: "",
    },
    reversed: {
      keywords:
        "Independence, alone time, hardcore partying, ‘three’s a crowd’",
      description: "",
    },
    valueInt: 3,
    type: "minor",
  },
  {
    id: 39,
    name: "Four of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Meditation, contemplation, apathy, reevaluation",
      description: "",
    },
    reversed: {
      keywords: "Retreat, withdrawal, checking in for alignment",
      description: "",
    },
    valueInt: 4,
    type: "minor",
  },
  {
    id: 40,
    name: "Five of Cups",
    icons: { value: null, suit: "cups" },
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
    id: 41,
    name: "Six of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Revisiting the past, childhood memories, innocence, joy",
      description: "",
    },
    reversed: {
      keywords: "Living in the past, forgiveness, lacking playfulness",
      description: "",
    },
    valueInt: 6,
    type: "minor",
  },
  {
    id: 42,
    name: "Seven of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Opportunities, choices, wishful thinking, illusion",
      description: "",
    },
    reversed: {
      keywords: "Alignment, personal values, overwhelmed by choices",
      description: "",
    },
    valueInt: 7,
    type: "minor",
  },
  {
    id: 43,
    name: "Eight of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Disappointment, abandonment, withdrawal, escapism",
      description: "",
    },
    reversed: {
      keywords:
        "Trying one more time, indecision, aimless drifting, walking away",
      description: "",
    },
    valueInt: 8,
    type: "minor",
  },
  {
    id: 44,
    name: "Nine of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Contentment, satisfaction, gratitude, wish come true",
      description: "",
    },
    reversed: {
      keywords: "Inner happiness, materialism, dissatisfaction, indulgence",
      description: "",
    },
    valueInt: 9,
    type: "minor",
  },
  {
    id: 45,
    name: "Ten of Cups",
    icons: { value: null, suit: "cups" },
    upright: {
      keywords: "Divine love, blissful relationships, harmony, alignment",
      description: "",
    },
    reversed: {
      keywords: "Disconnection, misaligned values, struggling relationships",
      description: "",
    },
    valueInt: 10,
    type: "minor",
  },
  {
    id: 46,
    name: "Page of Cups",
    icons: { value: "page", suit: "cups" },
    upright: {
      keywords:
        "Creative opportunities, intuitive messages, curiosity, possibility",
      description: "",
    },
    reversed: {
      keywords:
        "New ideas, doubting intuition, creative blocks, emotional immaturity",
      description: "",
    },
    valueInt: 11,
    type: "minor",
  },
  {
    id: 47,
    name: "Knight of Cups",
    icons: { value: "knight", suit: "cups" },
    upright: {
      keywords: "Creativity, romance, charm, imagination, beauty.",
      description: "",
    },
    reversed: {
      keywords: "Overactive imagination, unrealistic, jealous, moody",
      description: "",
    },
    valueInt: 12,
    type: "minor",
  },
  {
    id: 48,
    name: "Queen of Cups",
    icons: { value: "queen", suit: "cups" },
    upright: {
      keywords: "Compassionate, caring, emotionally stable, intuitive, in flow",
      description: "",
    },
    reversed: {
      keywords: "Inner feelings, self-care, self-love, co-dependency",
      description: "",
    },
    valueInt: 13,
    type: "minor",
  },
  {
    id: 49,
    name: "King of Cups",
    icons: { value: "king", suit: "cups" },
    upright: {
      keywords: "Emotionally balanced, compassionate, diplomatic",
      description: "",
    },
    reversed: {
      keywords:
        "Self-compassion, inner feelings, moodiness, emotionally manipulative",
      description: "",
    },
    valueInt: 14,
    type: "minor",
  },
  {
    id: 50,
    name: "Ace of Swords",
    icons: { value: "a", suit: "swords" },
    upright: {
      keywords: "Breakthroughs, new ideas, mental clarity, success",
      description: "",
    },
    reversed: {
      keywords: "Inner clarity, re-thinking an idea, clouded judgement",
      description: "",
    },
    valueInt: 1,
    type: "minor",
  },
  {
    id: 51,
    name: "Two of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords:
        "Difficult decisions, weighing up options, an impasse, avoidance",
      description: "",
    },
    reversed: {
      keywords: "Indecision, confusion, information overload, stalemate",
      description: "",
    },
    valueInt: 2,
    type: "minor",
  },
  {
    id: 52,
    name: "Three of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords: "Heartbreak, emotional pain, sorrow, grief, hurt",
      description: "",
    },
    reversed: {
      keywords: "Negative self-talk, releasing pain, optimism, forgiveness",
      description: "",
    },
    valueInt: 3,
    type: "minor",
  },
  {
    id: 53,
    name: "Four of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords: "Rest, relaxation, meditation, contemplation, recuperation",
      description: "",
    },
    reversed: {
      keywords: "Exhaustion, burn-out, deep contemplation, stagnation",
      description: "",
    },
    valueInt: 4,
    type: "minor",
  },
  {
    id: 54,
    name: "Five of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords:
        "Conflict, disagreements, competition, defeat, winning at all costs",
      description: "",
    },
    reversed: {
      keywords: "Reconciliation, making amends, past resentment",
      description: "",
    },
    valueInt: 5,
    type: "minor",
  },
  {
    id: 55,
    name: "Six of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords: "Transition, change, rite of passage, releasing baggage",
      description: "",
    },
    reversed: {
      keywords:
        "Personal transition, resistance to change, unfinished business",
      description: "",
    },
    valueInt: 6,
    type: "minor",
  },
  {
    id: 56,
    name: "Seven of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords:
        "Betrayal, deception, getting away with something, acting strategically",
      description: "",
    },
    reversed: {
      keywords: "Imposter syndrome, self-deceit, keeping secrets",
      description: "",
    },
    valueInt: 7,
    type: "minor",
  },
  {
    id: 57,
    name: "Eight of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords:
        "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
      description: "",
    },
    reversed: {
      keywords:
        "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
      description: "",
    },
    valueInt: 8,
    type: "minor",
  },
  {
    id: 58,
    name: "Nine of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords: "Anxiety, worry, fear, depression, nightmares",
      description: "",
    },
    reversed: {
      keywords: "Inner turmoil, deep-seated fears, secrets, releasing worry",
      description: "",
    },
    valueInt: 9,
    type: "minor",
  },
  {
    id: 59,
    name: "Ten of Swords",
    icons: { value: null, suit: "swords" },
    upright: {
      keywords: "Painful endings, deep wounds, betrayal, loss, crisis",
      description: "",
    },
    reversed: {
      keywords: "Recovery, regeneration, resisting an inevitable end",
      description: "",
    },
    valueInt: 10,
    type: "minor",
  },
  {
    id: 60,
    name: "Page of Swords",
    icons: { value: "page", suit: "swords" },
    upright: {
      keywords:
        "New ideas, curiosity, thirst for knowledge, new ways of communicating",
      description: "",
    },
    reversed: {
      keywords:
        "Self-expression, all talk and no action, haphazard action, haste",
      description: "",
    },
    valueInt: 11,
    type: "minor",
  },
  {
    id: 61,
    name: "Knight of Swords",
    icons: { value: "knight", suit: "swords" },
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
    id: 62,
    name: "Queen of Swords",
    icons: { value: "queen", suit: "swords" },
    upright: {
      keywords:
        "Independent, unbiased judgement, clear boundaries, direct communication",
      description: "",
    },
    reversed: {
      keywords: "Overly-emotional, easily influenced, bitchy, cold-hearted",
      description: "",
    },
    valueInt: 13,
    type: "minor",
  },
  {
    id: 63,
    name: "King of Swords",
    icons: { value: "king", suit: "swords" },
    upright: {
      keywords: "Mental clarity, intellectual power, authority, truth",
      description: "",
    },
    reversed: {
      keywords: "Quiet power, inner truth, misuse of power, manipulation",
      description: "",
    },
    valueInt: 14,
    type: "minor",
  },
  {
    id: 64,
    name: "Ace of Pentacles",
    icons: { value: "a", suit: "pentacles" },
    upright: {
      keywords:
        "A new financial or career opportunity, manifestation, abundance",
      description: "",
    },
    reversed: {
      keywords: "Lost opportunity, lack of planning and foresight",
      description: "",
    },
    valueInt: 1,
    type: "minor",
  },
  {
    id: 65,
    name: "Two of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords:
        "Multiple priorities, time management, prioritisation, adaptability",
      description: "",
    },
    reversed: {
      keywords: "Over-committed, disorganisation, reprioritisation",
      description: "",
    },
    valueInt: 2,
    type: "minor",
  },
  {
    id: 66,
    name: "Three of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Teamwork, collaboration, learning, implementation",
      description: "",
    },
    reversed: {
      keywords: "Disharmony, misalignment, working alone",
      description: "",
    },
    valueInt: 3,
    type: "minor",
  },
  {
    id: 67,
    name: "Four of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Saving money, security, conservatism, scarcity, control",
      description: "",
    },
    reversed: {
      keywords: "Over-spending, greed, self-protection",
      description: "",
    },
    valueInt: 4,
    type: "minor",
  },
  {
    id: 68,
    name: "Five of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Financial loss, poverty, lack mindset, isolation, worry",
      description: "",
    },
    reversed: {
      keywords: "Recovery from financial loss, spiritual poverty",
      description: "",
    },
    valueInt: 5,
    type: "minor",
  },
  {
    id: 69,
    name: "Six of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Giving, receiving, sharing wealth, generosity, charity",
      description: "",
    },
    reversed: {
      keywords: "Self-care, unpaid debts, one-sided charity",
      description: "",
    },
    valueInt: 6,
    type: "minor",
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Long-term view, sustainable results, perseverance, investment",
      description: "",
    },
    reversed: {
      keywords: "Lack of long-term vision, limited success or reward",
      description: "",
    },
    valueInt: 7,
    type: "minor",
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Apprenticeship, repetitive tasks, mastery, skill development",
      description: "",
    },
    reversed: {
      keywords: "Self-development, perfectionism, misdirected activity",
      description: "",
    },
    valueInt: 8,
    type: "minor",
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords: "Abundance, luxury, self-sufficiency, financial independence",
      description: "",
    },
    reversed: {
      keywords: "Self-worth, over-investment in work, hustling",
      description: "",
    },
    valueInt: 9,
    type: "minor",
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    icons: { value: null, suit: "pentacles" },
    upright: {
      keywords:
        "Wealth, financial security, family, long-term success, contribution",
      description: "",
    },
    reversed: {
      keywords: "The dark side of wealth, financial failure or loss",
      description: "",
    },
    valueInt: 10,
    type: "minor",
  },
  {
    id: 74,
    name: "Page of Pentacles",
    icons: { value: "page", suit: "pentacles" },
    upright: {
      keywords: "Manifestation, financial opportunity, skill development",
      description: "",
    },
    reversed: {
      keywords: "Lack of progress, procrastination, learn from failure",
      description: "",
    },
    valueInt: 11,
    type: "minor",
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    icons: { value: "knight", suit: "pentacles" },
    upright: {
      keywords: "Hard work, productivity, routine, conservatism",
      description: "",
    },
    reversed: {
      keywords: "Self-discipline, boredom, feeling 'stuck', perfectionism",
      description: "",
    },
    valueInt: 12,
    type: "minor",
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    icons: { value: "queen", suit: "pentacles" },
    upright: {
      keywords: "Nurturing, practical, providing financially, a working parent",
      description: "",
    },
    reversed: {
      keywords: "Financial independence, self-care, work-home conflict",
      description: "",
    },
    valueInt: 13,
    type: "minor",
  },
  {
    id: 77,
    name: "King of Pentacles",
    icons: { value: "king", suit: "pentacles" },
    upright: {
      keywords: "Wealth, business, leadership, security, discipline, abundance",
      description: "",
    },
    reversed: {
      keywords: "Financially inept, obsessed with wealth and status, stubborn",
      description: "",
    },
    valueInt: 14,
    type: "minor",
  },
];
export default cardData;
