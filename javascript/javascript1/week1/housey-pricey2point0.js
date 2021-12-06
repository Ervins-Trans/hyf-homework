// This will be a better solution to housepricing task

/* declare user arrays, that store data about the user, in the format of 
0-name; 1,2,3 - measurments of the house as width, depth, height; 4 - size of garden; 5 - deal that offered on the house.
It is important that data would be stored in array in this format */

const peterArr = ["Peter", 8, 10, 10, 100, 2500000];
const juliaArr = ["Julia", 5, 11, 8, 70, 1000000];

const usersArr = [peterArr, juliaArr];
console.log(usersArr);
// for as long as there are users in the array of users, go through each of them and
for (i = 0; i < usersArr.length; i++) {
  //pull data from sub array and make necessary calculations
  homeSize = usersArr[i][1] * usersArr[i][2] * usersArr[i][3];
  gardenArea = usersArr[i][4];
  housePrice = homeSize * 2.5 * 1000 + gardenArea * 300;
  console.log("\n");
  //done with math of the size and price of the house, based on the respective user data stored in their sub-array

  // this .log is here just for checking that the math is reasonable, it was not requested.
  console.log(
    usersArr[i][0] +
      "'s house's volume is " +
      homeSize +
      "m3 with a " +
      gardenArea +
      "m2 large garden, and total price should be " +
      housePrice +
      "."
  );
  // evaluate the projected price against offered price, print respective message based on outcome
  if (usersArr[i][5] > housePrice) {
    console.log(
      usersArr[i][0] +
        " is overpaying " +
        -(housePrice - usersArr[i][5]) +
        " for their house!"
    );
  } else {
    console.log(usersArr[i][0] + " found themselves a good deal!");
  }
}
// quit loop when all the users are served
