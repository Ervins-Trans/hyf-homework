"use strict";
console.log("github render script on");

/* async function testGetUser(user) {
  try {
    const fetchResponse = await fetch(
      `httpes://api.github.com/search/repositories?q=user:${user}`
    );
    const response = await fetchResponse.json();
    return response;
  } catch (err) {
    throw "There was an error during fetching on GitHubAPI";
  }
} 

const testUsers = testGetUser(`ervins-trans`);
console.log(testUsers); // should return an error throw, because httpes
*/
// make function that returns a promise with the data based on user
async function getUser(user) {
  // pass user
  try {
    // try getting
    const fetchResponse = await fetch(
      `https://api.github.com/search/repositories?q=user:${user}` // provide user
    );

    return fetchResponse; // raw response
  } catch (err) {
    throw "There was an error during fetching on GitHubAPI"; // error if user is gibberish or the link is broken somehow. Actually seems like username can be anything,
    // but i am a bit afraid to try stuff.
  }
}
// make function that will fetch for promised responses
function renderResponses() {
  try {
    Promise.all([
      getUser(`SvitlanaBurlaka`),
      getUser(`alina-kho`),
      getUser(`ervins-trans`),
      getUser(`vitalreddym`),
    ])
      .then((responses) => {
        // convert promised responses into objects
        return Promise.all(responses.map((item) => item.json()));
      })
      .then((obj) => {
        let users = obj.map((element) => element.items);
        const names = document.createElement("ul"); // make list
        // console.log(users); each array item has as many entries as user has repositories
        users.forEach((user) => {
          // work through fetched-converted users with their data
          const li = document.createElement("li"); // make sublist ( probably could be ul as well.)
          li.style = `list-style: none; padding: 24px;`;
          li.innerText = `Username: ${user[0].owner.login} \n Repositories : `; // set inner text accordingly for each user
          user.forEach((repository) => {
            // go through user's repositories
            const repo = document.createElement("li"); // make sub sub listitem
            repo.innerText = `${repository.name} : ${repository.url}`; // access parameters
            repo.style = `margin-left: 24px; list-style-type: disc;`; // style items a bit for them to stand out
            li.append(repo); // slap each repo to previous list
          });
          names.append(li); // users take their place in names-ul
        });
        document.body.append(names); // names appended to body
      });
  } catch (err) {
    console.log("There was an error working with promises");
  }
}
renderResponses(); // call function that will work on and render promises
