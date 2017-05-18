const webpack = require('webpack');
module.exports = {
  entry: {
    login: './dev/router.jsx',
  },
  output: {
    path:  __dirname+'/site/js/',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },{ 
      test: /\.css$/, 
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   }
    // })
    // new webpack.SourceMapDevToolPlugin({
    //   // Match assets just like for loaders.
    //   test: string | RegExp | Array,
    //   include: string | RegExp | Array,
    
    //   // `exclude` matches file names, not package names!
    //   exclude: string | RegExp | Array,
    
    //   // If filename is set, output to this file.
    //   // See `sourceMapFileName`.
    //   filename: string,
    
    //   // This line is appended to the original asset processed. For
    //   // instance '[url]' would get replaced with an url to the
    //   // sourcemap.
    //   append: false | string,
    
    //   // See `devtoolModuleFilenameTemplate` for specifics.
    //   moduleFilenameTemplate: string,
    //   fallbackModuleFilenameTemplate: string,
    
    //   module: bool, // If false, separate sourcemaps aren't generated.
    //   columns: bool, // If false, column mappings are ignored.
    
    //   // Use simpler line to line mappings for the matched modules.
    //   lineToLine: bool | {test, include, exclude}
    // })
  ]
};