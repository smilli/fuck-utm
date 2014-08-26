module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', 'test/*.js']
    },
    jasmine: {
      src: 'js/*.js',
      options: {
        specs: 'test/*Spec.js',
        vendor: 'bower_components/jquery/dist/jquery.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', ['jshint', 'jasmine']);
};
