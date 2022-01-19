"use strict";
// Name Remover //
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina", // small k ? aaaaaaight
  "Rasmus",
  "Samuel",
  "katrine", // small k ? aaaaaaight
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names.splice(names.indexOf(nameToRemove), 1);
/* Assuming we need to olny remove the one reference (first), or are limited with not being able to reassign the array or change what console.log has to take as a prop.
Otherwise different methods could be employed, like 
//names = names.filter((element) => element !== nameToRemove);
but that would either ask for let names, or for filteredNames = names.filter() ... ;
*/
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// Are we there yet ?

const travelInformation = {
  speed: 50,
  distance: 432,
};

/* Step by step solution 
function countTravelTime(fdistance, fspeed) {
  return fdistance / fspeed; // get hours and minutes in decimal format, 8 h and 64/100 with given numbers
}
console.log(
  countTravelTime(travelInformation.distance, travelInformation.speed)
);

function convertTime(givenTime) {
  let h = Math.floor(givenTime); // get full hours
  let m = Math.floor((givenTime % h) * 60); // get "leftovers" in decimal format and multiply by 60 to gain minutes we all are used to.

  return h + " hours, " + m + " minutes.";
}
console.log(
  convertTime(
    countTravelTime(travelInformation.distance, travelInformation.speed)
  )
  // call the console.log func/method with conversion function as param that has counting function's return as param, that has it's parameters taken from object properties.
);
*/
/* Mashup solution */
function mashTravelTime(object) {
  // grab an object
  let time = object.distance / object.speed; //assign time in decimal by dividing objects properties distance with speed
  return (
    // return
    Math.floor(time) + // full hours, because when rounded down, just what we need.
    " hours, " + // con-text
    Math.floor((time % Math.floor(time)) * 60) + // leftover of an hour (dec) converted to minutes and round it down
    " minutes." // mo4r con-text
  );
}
console.log(mashTravelTime(travelInformation)); // log uppermentioned based on object property values.

// Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "The Expanse",
    days: 1,
    hours: 20,
    minutes: 26,
  },
  {
    title: "Altered Carbon",
    days: 0,
    hours: 15,
    minutes: 0,
  },
  {
    title: "The Queen's Gambit",
    days: 0,
    hours: 7,
    minutes: 0,
  },
  {
    title: "Inside Job",
    days: 0,
    hours: 4,
    minutes: 40,
  },
];
/*
 */
const humanLife = 80 * 365 * 24 + 20 * 24; // roguhly 80 years worth in hours, + roughly 20 of leap years adding another 24h each
function logOutSeriesText(arr) {
  // take an array
  let overallDuration = 0; // initiate variables
  for (let i = 0; i < arr.length; i++) {
    // for an lenght of an array
    let duration = // combine the lenght of the series
      seriesDurations[i].days * 24 + // converting days to hours
      seriesDurations[i].hours + // adding hours
      seriesDurations[i].minutes / 60; // and adding converted to hours minutes
    console.log(
      // log the title
      arr[i].title +
        " is " +
        Math.round(duration) + // and it's approximate duration, rounded
        " hours long or approximatelly " +
        (Math.round(duration) / humanLife).toFixed(6) + // compare given series duration to human life and cut at 6th decimal after point.
        "% of human's life"
    );
    overallDuration = overallDuration + duration; // increase total duration for further use
  }
  console.log(
    // log the total comparement of array of series duration to human life. Feel sad.
    "Human's life is roughly " +
      humanLife +
      " hours long" +
      "\n" +
      "Overall duration of series is " +
      overallDuration +
      " or " +
      (overallDuration / humanLife).toFixed(5) +
      "% of human's life. Sad times."
  );
}
logOutSeriesText(seriesDurations);

// smart-ease notes

const notes = [];

function saveNote(content, id) {
  let object = {
    // let it be an object
    content: content, // with a content connected to contect param
    id: id, // and id connected to content id (this will get messy with a real database :) )
  };
  notes.push(object); // push an object to array
}

saveNote("Pick up groceries", 1); //exec function with parameters for being pushed
saveNote("Do laundry", 2); // one more time
saveNote("Feed cat", 3);
saveNote("Feed Fish", 4);
saveNote("Get fuel", 5);
saveNote("Code some homework", 6);
saveNote("Make bed", 8);
saveNote("Make food", 9);
saveNote("Hug your beloved rats", 10);
saveNote("HYDRATE!!!", 11); // and like 10 more times for an "unique feature"

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  return notes.filter((o) => o.id === id); // returns only an array object that has id property ===  id param (strictly equal. can be just equal.)
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  // we have access to notes array, and we don't pass it here,
  for (
    let i = 0;
    i < notes.length;
    i++ // so we will use notes.lenght and refer to notes as it is. No reusability allowed.
  ) {
    console.log(
      "The note with id: " +
        notes[i].id +
        " has the following note text: " +
        notes[i].content +
        "\n"
    );
  }
  // your code here
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// and it does :)

function surpriseMechanics() {
  //unique feature for smart-ease notes.
  if (notes.length > 5) {
    // we being lasy ass and just adding things to do, never checking them out (not because there is no such function yet)
    let x = Math.floor(Math.random() * notes.length); // so we pick a random number that is capped by the array's lenght
    let randomNote = notes[x].content; // we select a random note from array and take it's content

    console.log(randomNote.toUpperCase()); // and log it's content in all caps
  }
}
surpriseMechanics(); // we are calling the unique feature function for it to check if there is something for it to do.
