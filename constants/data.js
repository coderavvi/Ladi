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

export const getStarted = [
  {
    title: "Reduce Stress",
    color: "#8e97fd",
    imageUrl: stressImage,
    textColor: "#fff",
    preamble: "Manage stress levels",
  },
  {
    title: "Reduce Anxiety",
    color: "#ffc97e",
    imageUrl: anxietyImage,
    textColor: "#000",
    preamble: "Overcome anxiety",
  },
];

export const selfCare = [
  {
    title: "Reduce Stress",
    imageUrl: stressImage,
    color: "#8e97fd",
    textColor: "#fff",
  },
  {
    title: "Improve Productivity",
    imageUrl: productivity,
    color: "#f5d572",
  },
  {
    title: "Increase Happiness",
    imageUrl: hapiness,
    color: "#feb18f",
  },
  {
    title: "Reduce Anxiety",
    imageUrl: anxietyImage,
    color: "#ffc97e",
  },
  {
    title: "Personal Growth",
    imageUrl: growth,
    color: "#6cb28e",
    textColor: "#fff",
  },
  {
    title: "Better Sleep",
    imageUrl: sleep,
    color: "#4e5567",
    textColor: "#fff",
  },
  {
    title: "Manage Depression",
    imageUrl: depression,
    color: "#385a64",
    textColor: "#ffffff",
  },
  {
    title: "Manage Anger",
    imageUrl: anger,
    color: "#ff6868",
    textColor: "#fff",
  },
  {
    title: "Increase Self-Awareness",
    imageUrl: selfAwareness,
    color: "#fcbfac",
  },
  {
    title: "Increase Focus",
    imageUrl: focus,
    color: "#93bfa8",
    textColor: "#fff",
  },
  {
    title: "Manage Loneliness",
    imageUrl: loneliness,
    color: "#017a82",
    textColor: "#fff",
  },
];

export const recommended = [
  {
    title: "Increase Focus",
    imageUrl: focus,
    color: "#93bfa8",
  },
  {
    title: "Improve Productivity",
    imageUrl: productivity,
    color: "#f5d572",
  },
  {
    title: "Better Sleep",
    imageUrl: sleep,
    color: "#4e5567",
  },
  {
    title: "Personal Growth",
    imageUrl: growth,
    color: "#6cb28e",
  },
];

export const dailyTips = [
  {
    title: "Practice Self-Compassion",
    tip: "Treat yourself with Kindness, understanding, and patience. Acknowledge your emotions and thought without judgement. Be gentle with yourself, just as you would with a close friend.",
  },
];
