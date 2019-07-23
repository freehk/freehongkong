const readAll = () => {
  return fetch("/.netlify/functions/gallery-read-all").then(response => {
    return response.json();
  });
};

export default {
  readAll: readAll
};
