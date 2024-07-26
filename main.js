import { Card } from "./Card.js";
import { fetchData } from "./apiService.js";

function displayData(data) {}

function displayError(error) {}

document.addEventListener("DOMContentLoaded", () => {
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  fetchData(url)
    .then((data) => {
      console.log(data);
      const cardsContainer = document.querySelector(".root__content__cards");

      data.forEach((item) => {
        console.log(item);
        const card = Card(item);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching and rendering data: ", error);
    });
});
