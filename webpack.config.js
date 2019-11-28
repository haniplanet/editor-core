const path = require('path');
const WrmPlugin = require('atlassian-webresource-webpack-plugin');

const MODE = 'production'; // 기본적으로 production 모드를 사용
const ENTRY_FILE = path.resolve(__dirname, 'src', 'index.ts');
const OUTPUT_DIR = path.join(__dirname, 'build');

const config = {
  mode: MODE,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  optimization: {
    usedExports: true,
    concatenateModules: true,
    occurrenceOrder: true, // To keep filename consistent between different modes (for example building only)
  },
  entry: {
    index: ENTRY_FILE,
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new WrmPlugin({
      pluginKey: 'my.full.plugin.artifact-id',
      contextMap: {
        index: [],
        lib: [],
      },
      xmlDescriptors: path.resolve(OUTPUT_DIR, 'META-INF', 'plugin-descriptors', 'wr-defs.xml'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /(node_modules|example|build)/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
