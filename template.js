/*
 * grunt-init-gruntfile
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic Gruntfile for 101 Class.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
  'you will most likely need to edit the generated Gruntfile.js file before ' +
  'running grunt. _If you run grunt after generating the Gruntfile, and ' +
  'it exits with errors, edit the file!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    {
      name: 'package_json',
      message: 'Will you have a package.json file?',
      default: 'Y/n',
      warning: 'This changes how filenames are determined and banners are generated.'
    }
  ], function(err, props) {
    props.package_json = /y/i.test(props.package_json);

    // If is package_json true, generate package.json
    if (props.package_json) {
      var devDependencies = {
        'grunt': '~0.4.2',
        'grunt-cat': '~0.1.2'
      };

      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        node_version: '>= 0.10.0',
        devDependencies: devDependencies
      });
    }

    var files = init.filesToCopy(props);

    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
