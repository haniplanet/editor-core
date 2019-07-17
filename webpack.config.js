const path = require("path");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "src", "index.ts");
const OUTPUT_DIR = path.join(__dirname, "build");

// const ENTRY_LIB_FILE = path.resolve(__dirname, "src", "lib", "index.ts");

const config = {
  mode: MODE,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  entry: {
    index: ENTRY_FILE
    // lib: ["@babel/polyfill", ENTRY_LIB_FILE]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /(node_modules|example|build)/,
        loader: "ts-loader"
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};

module.exports = config;
