/*
 * grunt-keaton
 * https://github.com/lecodeur/grunt-keaton
 *
 * Copyright (c) 2014 Simp’s
 * Licensed under the MIT license.
 */

'use strict';

var crypto = require('crypto');

module.exports = function(grunt) {
  
  grunt.registerMultiTask('keaton', 'Bust your assets via a hash change in a dedicated one liner version file.', function() {

    var
      options = this.options({
        algorithm: 'sha1',
        length: 3
      }),
      hashString,
      hash = crypto.createHash(options.algorithm),
      newDate = new Date(),
      salt = newDate.getTime().toString();
    
    hash.update(salt);
    hashString = hash.digest('hex').substring(0,options.length);
    
    this.files.forEach(function(f) {
      if (f.src.length === 0) {
        var filepath = f.orig.src[0];
        grunt.file.write(filepath, hashString);
        grunt.log.write(filepath + ' created at ' + hashString);
      }
      f.src.forEach(function(filepath) {
        grunt.file.write(filepath, hashString);
        grunt.log.write(filepath + ' bumped to ' + hashString);

      });
    });
    
  });

};




