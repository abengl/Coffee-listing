import { Card } from "./Card.js";
import { fetchData } from "./apiService.js";

function displayData(url, attribute = null) {
  const cardsContainer = document.querySelector(".root__content__cards");
  cardsContainer.innerHTML = "";

  fetchData(url)
    .then((data) => {
      if (attribute) {
        data = data.filter((item) => item.available === attribute);
      }
      console.log(data);
      data.forEach((item) => {
        const card = Card(item);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching and rendering data: ", error);
    });
}

function displayError(error) {}

document.addEventListener("DOMContentLoaded", () => {
  const allProductsButton = document.querySelector("#all__products");
  const availableButton = document.querySelector("#available");
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  allProductsButton.addEventListener("click", () => {
    displayData(url);
  });

  availableButton.addEventListener("click", () => {
    displayData(url, true);
  });
});
