/*
 * grunt-keaton
 * https://github.com/lecodeur/grunt-keaton
 *
 * Copyright (c) 2014 Simp’s
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    keaton: {
      run: {
        files: {
          src: ['version.txt']
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['keaton:run']);

};
