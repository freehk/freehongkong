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

const readImgur = tags => {
  return fetch(`/.netlify/functions/imgur-read-tag/?tags=${tags}`).then(
    response => {
      return response.json();
    }
  );
};

export default {
  readAll: readAll,
  readCategory: readCategory,
  readImgur: readImgur
};
