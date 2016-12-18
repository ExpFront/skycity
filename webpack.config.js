/** blocks */
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

/** Root module of our app */
var rootModule = 'Starter';

module.exports = (function makeWebpackConfig () {
  var port = 3000;
  var config = {};

  config.entry = {
    app: './app/app.js'
  };

  config.output = {
    path: __dirname + '/dist',  /** Absolute output directory */
    publicPath: isProd ? '/' : 'http://localhost:' + port + '/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  }

  if (!isProd) {
    config.devtool = 'eval-source-map';
  }

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel'],
      exclude: /node_blocks/
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }]
  };

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes and other operations to your css
   */
  config.postcss = function (bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('postcss-inline-comment')(),
      require('postcss-hexrgba'),
      require('postcss-size'),
      require('precss')(),
      require('postcss-functions')({
        functions: {}
      }),
      require('css-mqpacker')(),
      require('postcss-discard-comments/dist/index')(),
      require('autoprefixer')({
        browsers: ['last 2 version']
      })
    ];
  };

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/blocks/' + rootModule + '/views/layout.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
  );

  /** Add build specific plugins */
  if (isProd) {
    config.plugins.push(

      /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
       * Only emit files when there are no errors
       */
      new webpack.NoErrorsPlugin(),

      /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
       * Dedupe blocks in the output
       */
      new webpack.optimize.DedupePlugin(),

       /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       * Minify all javascript, switch loaders to minimizing mode
       */
      new webpack.optimize.UglifyJsPlugin(),

       /**
       * Reference: https://github.com/kevlened/copy-webpack-plugin
       * Copy assets from the public folder
       */
      new CopyWebpackPlugin([{
        from: __dirname + '/app/assets'
      }])
    );
  }
  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './app/assets',
    stats: 'minimal',
    port: port
  };

  return config;
})();
