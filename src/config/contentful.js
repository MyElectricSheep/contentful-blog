// const contentful = require("contentful");
import * as contentful from 'contentful';

let accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

// if (process.env.NODE_ENV !== 'production') {
//   accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
// }

export default contentful.createClient({
  space: "n6dovmdnj5ms",
  environment: "master", // defaults to 'master' if not set
  accessToken,
});