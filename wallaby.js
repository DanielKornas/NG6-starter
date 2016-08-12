// Wallaby.js configuration
var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  // tests and spec.bundle.js will be entry patterns
  entryPatterns: [
    'spec.bundle.js',
    'client/**/*.spec.js'
  ]
});

module.exports = function(wallaby) {
  return {
    // set `load: false` to all source files and tests processed by webpack
    // (except external files),
    // as they should not be loaded in browser,
    // their wrapped versions will be loaded instead
    files: [
      {pattern: 'client/**/*.html', load: false},
      {pattern: 'client/**/*.scss', load: false},
      {pattern: 'client/**/*.css', load: false},
      {pattern: 'client/**/*.js', load: false},
      {pattern: 'spec.bundle.js', load: false}, // <-- loads angular
      //{pattern: 'node_modules/angular-ui-bootstrap/**/*.js', instrument: false}, // <-- bs
      {pattern: 'node_modules/chai/chai.js', instrument: false}, // <-- chai
      {pattern: 'client/**/*.spec.js', ignore: true}
    ],

    tests: [
      {pattern: 'client/**/*.spec.js', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    // preprocessors: {
    //   '**/*.scss': file => require('node-sass').renderSync(
    //     { data: file.changeExt('css').content || ' '
    //     }).css.toString()
    // },
    postprocessor: webpackPostprocessor,
    'testFramework': 'mocha',
    bootstrap: function() {
      window.__moduleBundler.loadTests();
      window.expect = chai.expect; // <-- setting window.expect
    }
  };
};
