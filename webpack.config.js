module.exports = {
 entry: "./main.js",
 output: {
     path: __dirname,
     filename: "bundle.js"
 },
 module: {
     loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      { test: /\.css$/, loader: "style!css" }
     ]
 }
};