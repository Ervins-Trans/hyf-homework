"use strict";
let userName; // global, undefined username
const todoList = []; // global, empty array of todos
const monthWords = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getReply(command) {
  let splitCommand = command.split(" "); // split command into words on spaces, for future use.
  // we check if userName was filled and matches, then if it was filled and is new, else we greet the first user for the first time
  // we also asume person does give name, and don't make any more checks
  if (
    command.includes("Hello, my name") &&
    userName == splitCommand[splitCommand.length - 1]
  ) {
    return (
      command + " - " + "Welcome back, " + splitCommand[splitCommand.length - 1]
    );
  } else if (
    command.includes("Hello, my name") &&
    userName !== splitCommand[splitCommand.length - 1 && userName !== undefined]
  ) {
    userName = splitCommand[splitCommand.length - 1];
    return (
      command + " - " + "New human! " + userName + ", pleasure is all mine!"
    );
  } else if (
    command.includes("Hello, my name") &&
    userName !== splitCommand[splitCommand.length - 1]
  ) {
    userName = splitCommand[splitCommand.length - 1];
    return (
      command +
      " - " +
      "Pleased to meet you, " +
      splitCommand[splitCommand.length - 1]
    );
  }
  // We check for what is my name case?
  else if (command.includes("my name?")) {
    if (userName == undefined) {
      return command + " - " + "Error, user undefined"; // if what is my name? will be the first command - this will fire, otherwise
    } else {
      return command + " - " + "Your name is " + userName; // this will be returned
    }
  }
  // with this we are done with the introduction part
  // and start on todo list interactions
  else if (command.includes("to my todo")) {
    // if something should go into todo, we are hopefull for a format being kept, and filter out unnecessary words from the request
    let filterWords = ["Add", "to", "my", "todo"];
    let todoItem = splitCommand.filter((word) =>
      filterWords.includes(word) ? "" : word
    ); // leaving only the activity
    todoList.push(todoItem.join(" ")); // and pushing it to an array as a string. For later use, output and comparament
    return "' " + todoItem.join(" ") + " '" + " was added to your todo list";
  } else if (command.includes("from my todo")) {
    // if something should go away from todo list, we are hopefull for a format being kept, and filter out unnecessary words from the request
    let filterWords = ["Remove", "from", "my", "todo"];
    let todoItemForRemoval = splitCommand.filter((word) =>
      filterWords.includes(word) ? "" : word
    ); // leaving only the activity
    let entryToRemove = todoItemForRemoval.join(" "); // unnecessary variable, to not to write join
    todoList.splice(todoList.indexOf(entryToRemove), 1); // splice and dice, and the item went away.
    return entryToRemove + " was removed from your todo list";
  } else if (command.includes("my todo?")) {
    // if we just want to see the list, we see the list
    console.log("Your todo list contains these tasks : "); // as there is no return in this if, it will return undefined.
    for (let todoCounter = 0; todoCounter < todoList.length; todoCounter++) {
      console.log(" " + todoList[todoCounter]);
    }
    // with this we are done with todo items interactions
    // Date. Get date, get month from array of month names by order in array.
  } else if (command.includes("day it is") || command.includes("day is it")) {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    today = dd + ". of " + monthWords[mm] + " " + yyyy;
    return today; // return date in a requested format
  } else if (
    // we return to what is statement, but filter out if it is abouth maths, not about name.
    command.includes("What is") && // if both are true, what is, and at least one of the math operators
    (command.includes("*") ||
      command.includes("+") ||
      command.includes("-") ||
      command.includes("/"))
  ) {
    if (command.includes("+")) {
      // decide which operator to take. probably could use cases. probably there is a smarter way :)
      let result = parseInt(splitCommand[2]) + parseInt(splitCommand[4]); // we still assume our input commands are well formated and everything is in it's rightful place.
      return (
        "Quickmafs! " +
        splitCommand[2] +
        " + " +
        splitCommand[4] +
        " is equal to " +
        result
      );
    }
    if (command.includes("-")) {
      let result = parseInt(splitCommand[2]) - parseInt(splitCommand[4]); // we follow on with a different operator
      return (
        "Quickmafs! " +
        splitCommand[2] +
        " - " +
        splitCommand[4] +
        " is equal to " +
        result
      );
    }
    if (command.includes("*")) {
      let result = parseInt(splitCommand[2]) * parseInt(splitCommand[4]); // and another one
      return (
        "Quickmafs! " +
        splitCommand[2] +
        " * " +
        splitCommand[4] +
        " is equal to " +
        result
      );
    }
    if (command.includes("/")) {
      if (parseInt(splitCommand[4]) == 0) {
        // an important check to keep universe just as broken as it is
        return "Dividing by 0 might bring you close to 42";
      }
      let result = parseInt(splitCommand[2]) / parseInt(splitCommand[4]);
      return (
        "Quickmafs! " +
        splitCommand[2] +
        " / " +
        splitCommand[4] +
        " is equal to " +
        result
      );
    }
    // finally we get to a timeout
  } else if (command.includes("Set a timer")) {
    // if we want to set a timer
    let timeout = splitCommand[4] * 1000; // then we grab the amount of seconds we want and convert it to miliseconds, which timers eat.
    function message() {
      // we make a function. we don't need to, but it is a bit nicer afterwards
      console.log("This was a timeouted message");
    }
    setTimeout(() => message(), timeout); // the afterwards
    return "A timer was set for " + splitCommand[4] + " seconds";
  }
}

console.log(getReply("What is my name?")); // "Error statement"
console.log(getReply("Hello, my name is Benjamin")); // Pleased to meet you, Benjamin (first user)
console.log(getReply("Hello, my name is Benjamin")); // Welcome back, Benjamin (returning user)
console.log(getReply("Hello, my name is Anne")); // New Human (New user, make current user)
console.log(getReply("Hello, my name is Anne")); // Welcome back, Morello (returning user2), but the first user if forgotten.
console.log(getReply("What is my name?")); // "Your name is Anne"
console.log(getReply("Add fishing to my todo")); // ' fishing ' was added
console.log(getReply("Add walk in the park to my todo")); // ' fishing ' was added
console.log(getReply("Add get groceries to my todo")); // ' fishing ' was added
console.log(getReply("Add singing in the shower to my todo")); //  ' singing in the shower '' was added
console.log(getReply("Remove fishing from my todo")); // "Removed "fishing" from your todo list"
console.log(getReply("What is on my todo?")); // returns items form todo list as console.log(s) returns undefined <<< Would be nice to do not to :)
console.log(getReply("What day is it today")); // Today is XX. of monthName YYYY
console.log(getReply("What day it is today")); // Today is XX. of monthName YYYY
console.log(getReply("What is 3 + 3")); // "You asked what is 3 + 3. It is equal to 6"
console.log(getReply("What is 5 / 7")); // "You asked what is 5 / 7. It is equal to 0.7smth"
console.log(getReply("What is 5 / 0")); // Division by 0 statetment
console.log(getReply("What is 9 * 6")); // "You asked what is 9 * 6. It is equal to 54"
console.log(getReply("Set a timer for 5 seconds")); // "A timer was set for 5 sec. This was a timeouted message (5sec) not 4 minutes for testing purposes.

/* No additional functionality this time, my brain is a bit melted, and nothing good / fun comes to mind 
just making another call for the sake of typing seems odd. */
