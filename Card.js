export function Card(item) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.classList.add("card__image");
  imageElement.src = item.image;
  imageElement.alt = `Image of a ${item.name}`;
  cardElement.appendChild(imageElement);

  if (item.popular) {
    const popularityElement = document.createElement("span");
    popularityElement.classList.add("card__popularity");
    popularityElement.textContent = "Popular";
    cardElement.appendChild(popularityElement);
  }

  const nameElement = document.createElement("h2");
  nameElement.classList.add("card__name");
  nameElement.textContent = item.name;
  cardElement.appendChild(nameElement);

  const priceElement = document.createElement("span");
  priceElement.classList.add("card__price");
  priceElement.textContent = item.price;
  cardElement.appendChild(priceElement);

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("card__rating");

  const starElement = document.createElement("img");
  starElement.classList.add("card__rating__star");

  const ratingElement = document.createElement("span");
  ratingElement.classList.add("card__rating__value");

  const votesElement = document.createElement("span");
  ratingElement.classList.add("card__rating__votes");

  if (item.rating) {
    starElement.src = "./assets/Star_fill.svg";
    starElement.alt = "Filled star icon";
    ratingElement.textContent = item.rating;
    votesElement.textContent = `(${item.votes} votes)`;
  } 
  else {
    starElement.src = "./assets/Star.svg";
    starElement.alt = "Empty star icon";
    votesElement.textContent = "No ratings";
  }
  ratingContainer.append(starElement, ratingElement, votesElement);
  cardElement.appendChild(ratingContainer);

  if (!item.available) {
    const availableElement = document.createElement("span");
    availableElement.classList.add("card__available");
    availableElement.textContent = "Sold out";
    cardElement.appendChild(availableElement);
  }

  return cardElement;
}
