import faunadb from "faunadb";

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
  console.log("Function `gallery-read-all` invoked");
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_freehongkong-gallery"))))
    .then(response => {
      const imageRefs = response.data;
      // console.log("Image refs", imageRefs);
      console.log(`${imageRefs.length} images found`);
      // create new query out of image refs. http://bit.ly/2LG3MLg
      const getAllImageDataQuery = imageRefs.map(ref => {
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllImageDataQuery).then(ret => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret)
        });
      });
    })
    .catch(error => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });
};
