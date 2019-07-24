const readAll = () => {
  return fetch("/.netlify/functions/gallery-read-all").then(response => {
    return response.json();
  });
};

const readCategory = category => {
  return fetch(
    `/.netlify/functions/gallery-read-category/?category=${category}`
  ).then(response => {
    return response.json();
  });
};

const readNotCategory = category => {
  return fetch(
    `/.netlify/functions/gallery-read-not-category/?category=${category}`
  ).then(response => {
    return response.json();
  });
};

export default {
  readAll: readAll,
  readCategory: readCategory,
  readNotCategory: readNotCategory
};
