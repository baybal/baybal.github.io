var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    hoodies: [
      './src/js/hoodies.js',
      './src/less/hoodies.less'
    ],
    background: [
      './src/js/background.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist/build/'),
    publicPath: '/dist/build/',
    filename: 'js/[name].js'
  },

  resolve: {
    alias: {
      'modules': path.resolve(__dirname, './src/js/modules/'),
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: isProduction
              }
            },
            'less-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '../'
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
    */
  ],

  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000,
    quiet: true
  }
};

if (isProduction) {
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ])
}
