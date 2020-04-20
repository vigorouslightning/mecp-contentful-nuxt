const contentful = require('contentful');
let space = "8hfgi7fwntly"; //process.env.VUE_APP_CONTENTFUL_SPACE;
let accessToken = "3OWbxhoixpB0f7od1LzRFGzMbUBgIQr5lsSZ78z-lWw"; //process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN;
let client = new contentful.createClient({
  space: space,
  accessToken: accessToken
});

export { client };
