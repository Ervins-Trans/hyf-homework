// Shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function compareLength(arr) {
  return arr.reduce((x, y) => (x.length <= y.length ? x : y));
}
console.log("The shortest word in array is " + compareLength(danishWords));
// returns 'ø' << Added console log here instead of consolelogging inside func

//Danish letter amount
function countLetters(string) {
  console.log(string);
  const result = { total: 0, æ: 0, ø: 0, å: 0 };
  [...string].forEach((element) => {
    element.match(/^[æøå]*$/) ? result.total++ : result.total;
    element.match("æ") ? result.æ++ : result.æ;
    element.match("ø") ? result.ø++ : result.ø;
    element.match("å") ? result.å++ : result.å;
  });
  return console.log(result);
}
//thanQ, my brain almost melted constructing this :)

const danishString = "Jeg har en blå bil";
countLetters(danishString); // returns {total: 1, å: 1}
/* Almost correct output, i am unsure how to increase object's properties without assigning them first, 
the return is, therefore {total: 1, æ: 0, ø: 0, å: 1} */
const danishString2 = "Blå grød med røde bær";
countLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1} . yay

// Spirit name Generation

const body = document.querySelector("body");
const input = document.getElementById("iName"); // grab an input if it has className set to InputName
const output = document.getElementsByClassName("output"); // grab an output that has this class
// we assume that elements with such classes will have values that can be considered for our purposes
const myButton = document.querySelector("button"); // grab the first ( and only, in our case ) button
const spiritArr = [
  "Care bear",
  "Mist Dragon",
  "Star Cat",
  "Destiny Rat",
  "Miracle Mallard",
  "Gallactic Stag",
  "Morning-dew Ladybug",
  "Rainbow Snow Fox",
  "Questgiving Cat",
  "Freedom Eagle",
]; // array of "spirit" animals

/*  I am a bit confused with the part that asks to create functionality where user might request a new spirit animal.
 The solution below does that by just pressing the generate button again, and honestly, I am unsure how to make it to just generate one, without
 specifically applying a restriction on doing that (clicking button again) with more code. 
 Smth like >> if (output[0].textContent !== '') {myButton.disabled = true},  */
let selector = document.getElementById("genSelector");

function generateSpirit() {
  console.log(input.value);
  // onclick event
  if (input.value == "") {
    // that checks for empty input
    alert("please check the input field"); // and alerts user if input is indeed empty
  } else {
    // otherwise
    let i = Math.round(Math.random() * 9); // random number from 0 to 9 ( just what we need for a 10 items long array of spirit-animals)
    output[0].textContent = input.value + " - " + spiritArr[i]; // make it that text of the output element becomes our necessary output
  }
}
body.onload = function (event) {
  myButton.addEventListener("click", generateSpirit); // default
};
selector.onchange = function (event) {
  switch (selector.value) {
    case "click": // there should be a better way ........
      myButton.addEventListener("click", generateSpirit);
      input.removeEventListener("mouseenter", generateSpirit);
      input.removeEventListener("input", generateSpirit);
      break;
    case "hover":
      myButton.removeEventListener("click", generateSpirit);
      input.addEventListener("mouseenter", generateSpirit);
      input.removeEventListener("input", generateSpirit);
      // This will need to tab into to avoid alert, but let's leave it like this :)
      break;
    case "change":
      myButton.removeEventListener("click", generateSpirit);
      input.removeEventListener("mouseenter", generateSpirit);
      input.addEventListener("input", generateSpirit);
      break;
  }
};
