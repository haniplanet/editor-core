const path = require("path");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "src", "index.ts");
const OUTPUT_DIR = path.join(__dirname, "build");

const config = {
  mode: MODE,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  entry: ["@babel/polyfill", ENTRY_FILE],
  output: {
    path: OUTPUT_DIR,
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /(node_modules|example|build)/,
        loader: "babel-loader"
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};

module.exports = config;
