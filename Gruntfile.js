module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      // copy the latest compiled version of bootstrap to our dist/ folder
      prereqs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/',
            src: 'css/bootstrap.min.css',
            dest: 'dist/'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/',
            src: 'js/bootstrap.min.js',
            dest: 'dist/'
          },
        ],
      },
    },

    'gh-pages': {
      options: { base: 'dist' },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('default', ['copy', 'gh-pages']);
};
