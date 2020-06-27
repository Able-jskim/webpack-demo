
//module.exports 는  CommonJS 스펙의 모듈을 정의 & 배포하는 방법
let HtmlWebpackPlugin =  require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          //postCss loader (후처리기)
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ]
      },
    ],
  },
  plugins: [

    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename : "main.css"
    })
  ],
};