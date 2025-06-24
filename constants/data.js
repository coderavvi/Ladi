const stressImage = require("../assets/images/stress.png");
const anxietyImage = require("../assets/images/anxiety.png");

const productivity = require("../assets/images/improved-productivity.png");
const loneliness = require("../assets/images/loneliness.png");
const depression = require("../assets/images/depression.png");
const sleep = require("../assets/images/sleep.png");
const growth = require("../assets/images/personal-growth.png");
const hapiness = require("../assets/images/happinness.png");
const selfAwareness = require("../assets/images/self-awareness.png");
const anger = require("../assets/images/anger.png");
const focus = require("../assets/images/focus.png");

// backgorund images
const bg1 = require("../assets/images/bg1.png");
const bg2 = require("../assets/images/bg2.png");
const bg3 = require("../assets/images/bg3.png");
const bg4 = require("../assets/images/bg4.png");

export const getStarted = [
  {
    title: "Reduce Stress",
    color: "#8e97fd",
    imageUrl: stressImage,
    textColor: "#fff",
    preamble: "Manage stress levels",
    bgImage: bg3,
  },
  {
    title: "Reduce Anxiety",
    color: "#ffc97e",
    imageUrl: anxietyImage,
    textColor: "#000",
    preamble: "Overcome anxiety",
    bgImage: bg2,
  },
];

const bgImages = [bg3, bg2, bg3, bg4];

function getRandomBg() {
  return bgImages[Math.floor(Math.random() * bgImages.length)];
}

export const selfCare = [
  {
    title: "Reduce Stress",
    imageUrl: stressImage,
    color: "#8e97fd",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
  {
    title: "Improve Productivity",
    imageUrl: productivity,
    color: "#f5d572",
    bgImage: getRandomBg(),
  },
  {
    title: "Increase Happiness",
    imageUrl: hapiness,
    color: "#feb18f",
    bgImage: getRandomBg(),
  },
  {
    title: "Reduce Anxiety",
    imageUrl: anxietyImage,
    color: "#ffc97e",
    bgImage: getRandomBg(),
  },
  {
    title: "Personal Growth",
    imageUrl: growth,
    color: "#6cb28e",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
  {
    title: "Better Sleep",
    imageUrl: sleep,
    color: "#4e5567",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
  {
    title: "Manage Depression",
    imageUrl: depression,
    color: "#385a64",
    textColor: "#ffffff",
    bgImage: getRandomBg(),
  },
  {
    title: "Manage Anger",
    imageUrl: anger,
    color: "#ff6868",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
  {
    title: "Increase Self-Awareness",
    imageUrl: selfAwareness,
    color: "#fcbfac",
    bgImage: getRandomBg(),
  },
  {
    title: "Increase Focus",
    imageUrl: focus,
    color: "#93bfa8",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
  {
    title: "Manage Loneliness",
    imageUrl: loneliness,
    color: "#017a82",
    textColor: "#fff",
    bgImage: getRandomBg(),
  },
];

export const recommended = [
  {
    title: "Increase Focus",
    imageUrl: focus,
    color: "#93bfa8",
    bgImage: bg4,
  },
  {
    title: "Improve Productivity",
    imageUrl: productivity,
    color: "#f5d572",
    bgImage: bg3,
  },
  {
    title: "Better Sleep",
    imageUrl: sleep,
    color: "#4e5567",
    bgImage: bg2,
  },
  {
    title: "Personal Growth",
    imageUrl: growth,
    color: "#6cb28e",
    bgImage: bg1,
  },
];

export const dailyTips = [
  {
    title: "Practice Self-Compassion",
    tip: "Treat yourself with Kindness, understanding, and patience. Acknowledge your emotions and thought without judgement. Be gentle with yourself, just as you would with a close friend.",
  },
];
