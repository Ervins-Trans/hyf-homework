// Warmup

const numbers = [1, 2, 3, 4]; // arr
const newNumbers = numbers // newNumbers are declared,
  .filter((e) => e % 2 !== 0) // and are filtered to odd numbers
  .map((newElement) => newElement * 2); // are multiplied by 2 and returned to the newNumbers array
console.log(`The doubled numbers are ${newNumbers}`); // 2, 6 (1*2, 3*2)

// Movies

const shortTitledMovies = movies //new array for short movies
  .filter((shortTitledMovie) => shortTitledMovie.title.length <= 3) // movies are filtered out if their title is 4 or longer
  .map((filteredMovie) => filteredMovie); // matching criteria movies are mapped to new array.
console.log(shortTitledMovies);

const longTitledMovies = movies //new array for long movies
  .filter((longTitledMovie) => longTitledMovie.title.length >= 20) // movies are filtered out if their title is 19 or shorter. Good case for an input or default lenght of some text.
  .map((filteredMovie) => filteredMovie); // matching criteria movies are mapped to new array.
console.log(longTitledMovies); // more than 1400 titles........ huh.

let amountOfMoviesInTenYears = 0; // long name for a short variable
movies.forEach((movieElement) =>
  movieElement.year >= 1980 && movieElement.year <= 1989
    ? amountOfMoviesInTenYears++
    : amountOfMoviesInTenYears
); // shorthand goes brrrrrrrrrrr ( for each movie check if filming year falls between 1980 and 1989, if true - increase, otherwise not)
console.log(
  `${amountOfMoviesInTenYears} movies were filmed in between 1980 and 1989` // more than 600 movies in 10 years, truly golden age of cinematography
);

// Tag assigning.
// Since we need to add tags to an object nested in array, it will work by reference, instead of value ( it will modify original array before mapping to new).
// To avoid that ... oh god...
const updatedMovies = JSON.parse(JSON.stringify(movies)).map((movie) => {
  // don't ask me. It is the only way of deep copy i know. It creates a new instance of an array
  // with all it's precious babies, instead of referencing them. Maybe there are others. I hope there are others or they should be made into being
  if (movie.rating >= 7) {
    movie.tag = `Good`;
  } else if (movie.rating < 4) {
    movie.tag = `Bad`;
  } else {
    movie.tag = `Average`;
  }
  return movie;
});
console.log(updatedMovies); // This array has the Tag key : value
console.log(movies); // And this does not, just the way it should be. // removing json.parse / stringify will immediatly allow "map" to access references,
// instead of work with values and attach them to the array it is mapping over. We don't do that here.
