const randomNames = [
  "Akshara",
  "Anirudh",
  "Arjun",
  "Aradhana",
  "Aishwarya",
  "Swathi",
  "Arun",
  "Kaushik",
  "Nandhini",
  "Gayathi",
  "Ganesh",
  "Pooja",
  "Udhaya",
  "Harish",
  "Shafee",
  "Thani",
];

const hollywoodDialogues = [
  "Here's looking at you, kid.",
  "I feel the need... the need for speed.",
  "May the Force be with you.",
  "There's no place like home.",
  "I'm the king of the world!",
  "Why so serious?",
  "Go ahead, make my day.",
  "Life is like a box of chocolates; you never know what you're gonna get.",
  "To infinity and beyond!",
  "You can't handle the truth!",
  "I'll be back.",
  "I coulda been a contender.",
  "Say 'hello' to my little friend!",
  "You talking to me?",
  "There's no crying in baseball!",
  "Just keep swimming.",
  "Here's Johnny!",
  "You had me at 'hello.'",
  "Houston, we have a problem.",
  "I am Iron Man.",
  "Keep your friends close, but your enemies closer.",
  "It's not about the money. It's about sending a message.",
  "I'm the Dude. So that's what you call me.",
  "You either die a hero, or you live long enough to see yourself become the villain.",
  "Here's looking at you, kid.",
  "I'm king of the world!",
  "I see dead people.",
  "I could dance with you till the cows come home. On second thought, I'd rather dance with the cows until you come home.",
  "I'm just one stomach flu away from my goal weight.",
];

export const randomNameGenerator = () => {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};

export const randomSentenceGenerator = () => {
  return hollywoodDialogues[
    Math.floor(Math.random() * hollywoodDialogues.length)
  ];
};
