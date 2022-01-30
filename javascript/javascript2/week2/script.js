// Warmup

const numbers = [1, 2, 3, 4]; // arr
const newNumbers = numbers // newNumbers are declared,
  .filter((e) => e % 2 !== 0) // and are filtered to odd numbers
  .map((newElement) => newElement * 2); // are multiplied by 2 and returned to the newNumbers array
console.log(`The doubled numbers are ${newNumbers}`); // 2, 6 (1*2, 3*2)

// Movies
const wrapper = document.querySelector(".wrapper");

wrapper.innerText = " Javascript Override ";

const importedMovies = movies;
