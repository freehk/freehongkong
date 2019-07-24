import axios from "axios";

// imgur.setClientId(process.env.IMGUR_CLIENT_ID);

exports.handler = (event, context, callback) => {
  console.log("Function `imgur-read-tag` invoked");
  console.log(event.queryStringParameters.tags);
  var optionalParams = { sort: "top", dateRange: "week", page: 1 };

  var arr = [];
  axios
    .get("https://api.imgur.com/3/gallery/search", {
      headers: { Authorization: "Client-ID 265425da70b7c0a" },
      params: { q: "freehongkong" }
    })
    .then(
      response => {
        const albums = response.data.data;
        console.log(`${albums.length} albums found`);
        const albumsOfImages = albums.map(album => {
          return album.images;
        });
        albumsOfImages.map(album => {
          album.map(image => {
            arr.push(image.link);
          });
        });
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(arr)
        });
      }
    )
    .catch(error => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });

  return 0;
};
