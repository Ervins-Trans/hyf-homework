const dogYearOfBirth = 2012;
let dogYearFuture = 2025;
//shouldn't this be called dogAgeMultiplier, for explicit-naming purposes?
let dogYear = 7;

let shouldShowResultInDogYears = false;
/*Making calculations based on bool, instead of making both calculations and then only print one on bool.
Makes more sense to me, but feel free to enjoy this multiline comment :) */

if (shouldShowResultInDogYears === true) {
  dogAge = dogYearFuture - dogYearOfBirth;
  dogExcerpt = "in human years ";
} else {
  dogAge = (dogYearFuture - dogYearOfBirth) * dogYear;
  dogExcerpt = "in dog years ";
}
let dogText =
  "Your dog will be " +
  dogAge +
  " years old " +
  dogExcerpt +
  "in year " +
  dogYearFuture +
  "."; // dots are important
console.log("\n");
console.log(dogText);
console.log("\n");
