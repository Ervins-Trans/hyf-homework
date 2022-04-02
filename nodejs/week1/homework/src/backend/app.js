const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// arrays for responses
const mealsReviewed = JSON.parse(JSON.stringify(meals)).map((meal) => {
  meal.reviews = [];
  reviews.forEach((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});
const mealsCheap = mealsReviewed.filter((meal) => meal.price < 60);
const mealsLarge = mealsReviewed.filter((meal) => meal.maxNumberOfGuests >= 5);
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
//sends all meals, combined with reviews
app.get("/meals", async (request, response) => {
  response.send(mealsReviewed);
});
//sends random meal
app.get("/meal", async (request, response) => {
  response.send(
    mealsReviewed[Math.floor(Math.random() * mealsReviewed.length)]
  );
});
//sends meals that are cheaper than z
app.get("/cheap-meals", async (request, response) => {
  response.send(mealsCheap);
});
//sends meals that can serve more than x persons
app.get("/large-meals", async (request, response) => {
  response.send(mealsLarge);
});
//sends all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
// sends one random reservation
app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});
module.exports = app;
