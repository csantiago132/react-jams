// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: 'assets/js/[name].[chunkhash].js',
    chunkFilename: 'assets/js/[name].[chunkhash].chunk.js',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Put it in the end to capture all the HtmlWebpackPlugin's
    // assets manipulations and do leak its manipulations to HtmlWebpackPlugin
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      autoUpdate: true,
      updateStrategy: 'all',
      externals: ['/'],
      ServiceWorker: {
        events: true,
        minify: true,
        prefetchRequest: {
          credentials: 'same-origin',
        },
      },
      excludes: [
        '.htaccess',
        //'https://www.googletagmanager.com/*',
        //'https://www.google-analytics.com/*',
        //'https://static.hotjar.com/*',
      ],
      caches: {
        main: [':rest:'],
        additional: ['assets/js/*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
      AppCache: false,
    }),
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});
