import { Card } from "../component/Card.js";
import { fetchData } from "./apiService.js";

function displayData(url, attribute = null) {
  const cardsContainer = document.querySelector(".content__cards");
  cardsContainer.innerHTML = "";

  fetchData(url)
    .then((data) => {
      if (attribute) {
        data = data.filter((item) => item.available === attribute);
      }
      data.forEach((item) => {
        const card = Card(item);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching and rendering data: ", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const allProductsButton = document.querySelector("#all__products");
  const availableButton = document.querySelector("#available");
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  displayData(url);

  availableButton.addEventListener("click", (e) => {
    e.preventDefault();
    availableButton.style.background = "var(--clr-text-grey)";
    allProductsButton.style.background = "transparent";
    displayData(url, true);
  });

  allProductsButton.addEventListener("click", (e) => {
    e.preventDefault();
    allProductsButton.style.background = "var(--clr-text-grey)";
    availableButton.style.background = "transparent";
    displayData(url);
  });
});
