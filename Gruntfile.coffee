'use strict'

banner = '/*!\n * @module <%= pkg.name %>\n' +
  ' * @description <%= pkg.description %>\n' +
  ' * @version v<%= pkg.version %>\n' +
  ' * @link <%= pkg.homepage %>\n' +
  ' * @licence MIT License, https://opensource.org/licenses/MIT\n' +
  ' */\n\n';

module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffee:
      compileJoined:
        options:
          join: true
        files:
          'dist/fileModel.js': ['src/fileModel.coffee']

    concat:
      options:
        stripBanners: true
        banner: banner
      dist:
        files:
          'dist/fileModel.js': ['dist/fileModel.js']

    clean:
      outDir:
        src: 'dist/'

    copy:
      files:
        expand: true
        src: ['LICENSE', 'README.md', 'CHANGELOG.md']
        dest: 'dist/'
      pkgJson:
        expand: true
        src: 'package.json'
        dest: 'dist/'
        options:
          process: (data) ->
            pkg = JSON.parse(data)
            pkg.main = 'fileModel.min.js'
            delete pkg.scripts
            delete pkg.devDependencies
            delete pkg.engines
            delete pkg.private
            JSON.stringify pkg, null, 2

    uglify:
      options:
        sourceMap: true
        output:
          comments: '/^!/'
      target:
        files:
          'dist/fileModel.min.js': ['dist/fileModel.js']

    watch:
      coffeescript:
        files: ['src/*.coffee']
        tasks: ['default']

  # Grunt task(s).
  grunt.registerTask 'default', ['coffee']
  grunt.registerTask 'develop', ['default', 'watch']
  grunt.registerTask 'build', ['clean', 'default', 'concat', 'uglify', 'copy']

  return
