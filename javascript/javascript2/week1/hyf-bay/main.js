console.log("Script loaded"); // indeed it was

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const main = document.getElementsByTagName("main")[0];
  // I see main segment, I grab main segment
  main.style = "background-color: gray; min-height: 100vh; ";
  // I style main segment so people don't get their eyebrows burned when checking code at night
  let section = document.createElement("section");
  // make section
  main.append(section);
  // push section
  section.style =
    "min-height: 100vh; margin: 0 auto 0; display: block; background-color: lightblue; max-width: 468px;";
  // explain section that it should hang around the middle of main
  const ul = document.createElement("ul"); // unordered list
  ul.style = "padding: 20px; margin: 0 0 5px 0;";
  section.append(ul);
  let listLenght = products.length;
  //we want to know how many products are there. We will save this information
  for (let i = 0; i <= listLenght; i++) {
    let item = products[i];
    const li = document.createElement("li"); // list item
    li.style =
      "padding: 12px; margin:12px; display:block; max-width:100vw; box-shadow: 0px 0px 11px 7px rgba(0,0,0,0.75);";
    li.innerHTML =
      "<h3>" +
      item.name +
      "</h3>" +
      "<span>" +
      item.price +
      "</span>" +
      "<p>" +
      "Rating : " +
      item.rating +
      "</p>";
    ul.append(li);
  }
}
renderProducts(products); // This should create the ul and the li's with the individual products details

/* throws a type error - Cannot read properties of undefined (reading 'name') at renderProducts. At the same time does not bark
on price or rating. Does the same through an item as well as when referencing products[i]. Confusion. Even larger confusion, that at the 
same time it DOES pass name to an innerHTML correctly.  */
