// Declare arrays

const firstWords = [];
const secondWords = [];

// Fill the arrays with data, also makes it a bit more visual.
firstWords.push("Good", "Better", "Best");
firstWords.push("Neutral", "Equal", "Modern");
firstWords.push("Alpha", "Omega", "Sigma", "EZ");

secondWords.push("Corps", ".inc", "Friends");
secondWords.push("B.E.A.S.T", "Protocol", "Society");
secondWords.push("Help", "Us", "M.A.R.S", "PZ");
// loops go brrrrrrrrrrrrrrrrrrrr
for (i = 0; i < 10; i++) {
  //huge thx for the Math. :)
  randomFirst = Math.floor(Math.random() * 10);
  randomSecond = Math.floor(Math.random() * 10);
  first = firstWords[randomFirst];
  second = secondWords[randomSecond];
  startupName = first + " " + second;
  console.log(
    " The startup name : " +
      startupName +
      " is " +
      startupName.length +
      " characters long. That's including the space ;) "
  );
}
