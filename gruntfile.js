module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n' +
            '\n'
    },
    concat: {
      options : {
        banner : '<%= meta.banner %>'
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    jshint : {
      options : {
        eqeqeq: true,
        eqnull: true,
        unused: true,
        browser: true,
        globals: {
          jQuery: true,
          console: true,
          window: true,
          document: true
        }
      },
      all: ['gruntfile.js', 'src/**/*js']
    },
    uglify: {
      options : {
        banner : '<%= meta.banner %>'
      },
      files: { 
          src: 'dist/<%= pkg.name %>.js',
          dest: 'dist/',  
          expand: true,  
          flatten: true,
          ext: '.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('default', ['concat', 'jshint', 'uglify']);

};