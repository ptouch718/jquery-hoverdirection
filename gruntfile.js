module.exports = function (grunt) {
  
  grunt.initConfig({
    jshint : {
      options : {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          window: true,
          document: true
        }
      },
      all: ['src/*js']
    },
    uglify: {
      files: { 
          src: 'src/jquery-hoverdirection.js',
          dest: 'dist/',  
          expand: true,  
          flatten: true,
          ext: '.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['jshint', 'uglify']);

};