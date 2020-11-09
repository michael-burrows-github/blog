const quotes = [
  '"I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with em later." — Mitch Hedberg',
  '"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are." - Will Ferrell',
  '"Someone asked me, if I were stranded on a desert island what book would I bring: ‘How to Build a Boat.’" - Steven Wright',
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(
  "\x1b[33m%s\x1b[0m",
  "---------------------\n" + randomQuote + "\n---------------------"
);
