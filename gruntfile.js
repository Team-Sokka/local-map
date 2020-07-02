const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.initConfig({
    webpack: {
      prod: Object.assign({watch: false, mode: 'production'},webpackConfig),
      dev: Object.assign({ watch: true, mode:'development'}, webpackConfig)

    }
  });
  grunt.loadNpmTasks('grunt-webpack');
};