/**
 * Displays the data fetched from the given URL by rendering cards.
 * @param {string} url - The URL to fetch data from.
 * @param {string} attribute - The attribute to filter items by.
 * @param {any} value - The value to match for filtering.
 */
export function displayData(url, attribute = null, value = null) {
  const cardsContainer = document.querySelector(".root__content__cards");
  cardsContainer.innerHTML = "";
  showLoadingIndicator(cardsContainer);

  fetchData(url)
    .then((data) => {
      /**
       * Displays the data fetched from the given URL by rendering cards.
       * @param {string} url - The URL to fetch data from.
       * @param {string} attribute - The attribute to filter items by.
       * @param {any} value - The value to match for filtering.
       */
      function displayData(url, attribute = null, value = null) {
        const cardsContainer = document.querySelector(".root__content__cards");
        cardsContainer.innerHTML = "";
        showLoadingIndicator(cardsContainer);

        fetchData(url)
          .then((data) => {
            if (attribute) {
              data = data.filter((item) => item[attribute] === value);
            }
            cardsContainer.innerHTML = ""; // Clear loading indicator
            console.log(data);
            data.forEach((item) => {
              const card = Card(item);
              cardsContainer.appendChild(card);
            });
          })
          .catch((error) => {
            console.error("Error fetching and rendering data: ", error);
            displayError(cardsContainer, error);
          });
      }

      /**
       * Displays a loading indicator.
       * @param {Element} container - The container element to show the loading indicator in.
       */
      function showLoadingIndicator(container) {
        const loadingElement = document.createElement("div");
        loadingElement.className = "loading";
        loadingElement.textContent = "Loading...";
        container.appendChild(loadingElement);
      }

      /**
       * Displays an error message in the given container.
       * @param {Element} container - The container element to show the error message in.
       * @param {Error} error - The error object to display.
       */
      function displayError(container, error) {
        container.innerHTML = ""; // Clear any existing content
        const errorElement = document.createElement("div");
        errorElement.className = "error";
        errorElement.textContent =
          "Failed to load data. Please try again later.";
        container.appendChild(errorElement);
      }
      if (attribute) {
        data = data.filter((item) => item[attribute] === value);
      }
      cardsContainer.innerHTML = ""; // Clear loading indicator
      console.log(data);
      data.forEach((item) => {
        const card = Card(item);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching and rendering data: ", error);
      displayError(cardsContainer, error);
    });
}

/**
 * Displays a loading indicator.
 * @param {Element} container - The container element to show the loading indicator in.
 */
export function showLoadingIndicator(container) {
  const loadingElement = document.createElement("div");
  loadingElement.className = "loading";
  loadingElement.textContent = "Loading...";
  container.appendChild(loadingElement);
}

/**
 * Displays an error message in the given container.
 * @param {Element} container - The container element to show the error message in.
 * @param {Error} error - The error object to display.
 */
export function displayError(container, error) {
  container.innerHTML = ""; // Clear any existing content
  const errorElement = document.createElement("div");
  errorElement.className = "error";
  errorElement.textContent = "Failed to load data. Please try again later.";
  container.appendChild(errorElement);
}
