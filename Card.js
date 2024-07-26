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

  const imageElement = createElement("img", "card__image", null, {
    src: item.image,
    alt: `Image of a cup of ${item.name} coffee`,
  });
  cardElement.appendChild(imageElement);

  if (item.popular) {
    const popularityElement = createElement("span", "card__popularity", "Popular");
    cardElement.appendChild(popularityElement);
  }

  const nameElement = createElement("h2", "card__name", item.name);
  cardElement.appendChild(nameElement);

  const priceElement = createElement("span", "card__price", item.price);
  cardElement.appendChild(priceElement);

  const ratingContainer = createElement("div", "card__rating");

  const starElement = createElement("img", "card__rating__star", null, {
    src: item.rating ? "./assets/Star_fill.svg" : "./assets/Star.svg",
    alt: item.rating ? "Filled star icon" : "Empty star icon",
  });

  const ratingElement = createElement("span", "card__rating__value", item.rating || "");

  const votesElement = createElement("span", "card__rating__votes", item.rating ? `(${item.votes} votes)` : "No raitings");

  ratingContainer.append(starElement, ratingElement, votesElement);
  cardElement.appendChild(ratingContainer);

  if (!item.available) {
    const availableElement = createElement("span", "card__available", "Sold out");
    cardElement.appendChild(availableElement);
  }

  return cardElement;
}
