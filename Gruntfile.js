module.exports = function(grunt) {
  grunt.initConfig({
    //pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'client/collections/*.js','client/models/*.js','client/views/*.js']
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','client/**/*.js'],
        tasks: 'jshint',
        options : {
          livereload: true
          // Place the script below in the main html file
          // <script src="//localhost:35729/livereload.js"></script>
        }
      },
      css: {
        files: ['client/style/*.css'],
        options : {
          livereload: true
        }
      },
      html: {
        files: ['client/index.html,test/SpecRunner.html'],
        options : {
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
