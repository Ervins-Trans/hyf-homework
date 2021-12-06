// Peter's Case
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterHouseGardenArea = 100;

let peterVolumeInMeters = peterHouseDepth * peterHouseWidth * peterHouseDepth;
console.log("\n");
console.log("Peter's house is " + peterVolumeInMeters + " cubicmeters.");
console.log("Their garden is " + peterHouseGardenArea + " m2 large.");
let peterGardenSizeinM2 = peterHouseGardenArea;
let peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeinM2 * 300;
console.log("\n");
console.log("Their house should have been priced at " + peterHousePrice);
let peterCalledPrice = 2500000;
let peterDifference = peterCalledPrice - peterHousePrice;

if (peterDifference > 0) {
  console.log("Peter is overpaying " + peterDifference + " for their house");
}
// in this case else is not needed with the current numbers but ..
else if (peterDifference == 0) {
  console.log("Peter's house costs exactly as it should");
} else {
  console.log(
    "The lucky Peter has found themselves a bargain, saving " +
      -peterDifference +
      " !"
  );
}

// Julia's Case
const JuliaHouseWidth = 5;
const JuliaHouseDepth = 11;
const JuliaHouseHeight = 8;
const JuliaHouseGardenArea = 70;

let juliaVolumeInMeters = JuliaHouseDepth * JuliaHouseWidth * JuliaHouseDepth;
console.log("\n");
console.log("Julia's house is " + juliaVolumeInMeters + " cubicmeters.");
console.log("Their garden is " + JuliaHouseGardenArea + " m2 large.");
let juliaGardenSizeinM2 = JuliaHouseGardenArea;
let juliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeinM2 * 300;
console.log("\n");
console.log("Their house should have been priced at " + juliaHousePrice);
let juliaCalledPrice = 1000000;
juliaDifference = juliaCalledPrice - juliaHousePrice;

if (juliaDifference > 0) {
  console.log("Julia is overpaying " + juliaDifference + " for their house");
}
// in this case exactly opposite from peter's case is happening, but all the checks are here for the glory of structure.
else if (juliaDifference == 0) {
  console.log("Julia's house costs exactly as it should");
} else {
  console.log(
    "The lucky Julia has found themselves a bargain, saving " +
      -juliaDifference +
      " ! Hopefully a good neighbourhood and no ghosts! (ghosts don't exist, bad neighbourhoods do)"
  );
}
console.log("\n");
