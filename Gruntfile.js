module.exports = function(grunt) {

  grunt.initConfig({

    // copy the latest compiled version of bootstrap to our dist/ folder
    copy: {
      prereqs: {
        files: [{
          expand: true,
          cwd: 'node_modules/bootstrap/dist/',
          src: 'css/bootstrap.min.css',
          dest: 'dist/'
        },{
          expand: true,
          cwd: 'node_modules/bootstrap/dist/',
          src: 'js/bootstrap.min.js',
          dest: 'dist/'
        }],
      },
    },

    //
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'dist/css/screen.css': 'styles/screen.scss'
        },
      },
    },

    // commit contents of dist folder to gh-pages branch
    'gh-pages': {
      options: { base: 'dist' },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['copy', 'sass', 'gh-pages']);
};
