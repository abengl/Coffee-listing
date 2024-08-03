function createElement(tag, className, text, attributes = {}) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
}

export function Card(item) {
  const cardElement = createElement("div", "card");
  const imageContainer = createElement("div", "card__image__container");
  cardElement.appendChild(imageContainer);

  const imageElement = createElement("img", "card__image", null, {
    src: item.image,
    alt: `Image of a cup of ${item.name} coffee`,
  });
  imageContainer.appendChild(imageElement);

  if (item.popular) {
    const popularityElement = createElement(
      "span",
      "card__popularity",
      "Popular"
    );
    imageContainer.appendChild(popularityElement);
  }
  const nameContainer = createElement("div", "card__name__container");
  cardElement.appendChild(nameContainer);
  
  const nameElement = createElement("h2", "card__name", item.name);
  nameContainer.appendChild(nameElement);

  const priceElement = createElement("span", "card__price", item.price);
  nameContainer.appendChild(priceElement);
  
  const ratingContainer = createElement("div", "card__rating");
  cardElement.appendChild(ratingContainer);

  const starElement = createElement("img", "card__rating__star", null, {
    src: item.rating ? "../assets/Star_fill.svg" : "../assets/Star.svg",
    alt: item.rating ? "Filled star icon" : "Empty star icon",
  });

  const ratingElement = createElement(
    "span",
    "card__rating__value",
    item.rating || ""
  );

  const votesElement = createElement(
    "span",
    "card__rating__votes",
    item.rating ? ` (${item.votes} votes)` : "No ratings"
  );
  ratingElement.appendChild(votesElement);

  ratingContainer.append(starElement, ratingElement);

  if (!item.available) {
    const availableElement = createElement(
      "span",
      "card__available",
      "Sold out"
    );
    ratingContainer.appendChild(availableElement);
  }

  return cardElement;
}
