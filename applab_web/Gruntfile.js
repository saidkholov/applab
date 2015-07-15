module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON("package.json"),
    concat : {
      options : {
        separator : ";",
        sourceMap : true,
      },
      dist: {
        src : ["<%= pkg.static %>/js/**/*.js",
              "!<%= pkg.static %>/js/jquery.min.js"],
        dest : "<%= pkg.static %>/tmp/<%=pkg.name %>.js"
      }
    },
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          '<%= pkg.static %>/tmp/style.css' : '<%= pkg.static %>/css/scss/style.scss'       // 'destination': 'source' 
        }
      }
    },
    watch: {
      css : {
        files: ['<%= pkg.static %>/css/scss/**/*.scss'],
        tasks: ['sass','cssmin']
      },
      js : {
        files: ['<%= concat.dist.src %>'],
        tasks: ['concat','uglify']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapIn : '<%= concat.dist.dest %>.map'
      },
      dist: {
        files: {
          '<%= pkg.static %>/dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    cssmin: {
      options: {
        sourceMap : true,
      },
      target: {
        files: {
          '<%= pkg.static %>/dist/css/<%= pkg.name %>.min.css': '<%= pkg.static %>/tmp/style.css'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
        all: ['Gruntfile.js', '<%= pkg.static %>/js/**/*.js']
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat', 'sass','uglify','cssmin','jshint']);
  grunt.registerTask('test', ['jshint']);
};