export function fetchData(url) {
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your request:",
        error
      );
      throw error;
    });
}
