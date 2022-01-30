// Warmup

const numbers = [1, 2, 3, 4]; // arr
const newNumbers = numbers // newNumbers are declared,
  .filter((e) => e % 2 !== 0) // and are filtered to odd numbers
  .map((newElement) => newElement * 2); // are multiplied by 2 and returned to the newNumbers array
console.log(`The doubled numbers are ${newNumbers}`); // 2, 6 (1*2, 3*2)

// Movies

const shortTitledMovies = movies //new array for short movies
  .filter((movie) => movie.title.length <= 3) // movies are filtered out if their title is 4 or longer
  .map((filteredMovie) => filteredMovie); // matching criteria movies are mapped to new array.
console.log(shortTitledMovies);

const longTitledMovies = movies //new array for long movies
  .filter((movie) => movie.title.length >= 20) // movies are filtered out if their title is 19 or shorter. Good case for an input or default lenght of some text.
  .map((filteredMovie) => filteredMovie); // matching criteria movies are mapped to new array.
console.log(longTitledMovies); // more than 1400 titles........ huh.

let amountOfMoviesInTenYears = 0; // long name for a short variable
movies.forEach((movie) =>
  movie.year >= 1980 && movie.year <= 1989
    ? amountOfMoviesInTenYears++
    : amountOfMoviesInTenYears
); // shorthand goes brrrrrrrrrrr ( for each movie check if filming year falls between 1980 and 1989, if true - increase, otherwise not)
console.log(
  `${amountOfMoviesInTenYears} movies were filmed in between 1980 and 1989` // more than 600 movies in 10 years, truly golden age of cinematography
);
