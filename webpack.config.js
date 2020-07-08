const path = require("path");

module.exports = {
  entry: "./trans/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }  

};
