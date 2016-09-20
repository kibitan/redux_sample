module.exports={
  entry: {
    app: './src/app.jsx',
    app2: './src/app2.jsx'
  },
  output: {
    path: __dirname+"/dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
