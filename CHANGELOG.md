# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

## Unreleased

#### Dependency Updates

* update eslint to v5.5.0 ([fd3f179](https://github.com/sibiraj-s/angularjs-file-model/commit/fd3f179))
* update grunt-contrib-uglify to v4.0.0 ([fd3f179](https://github.com/sibiraj-s/angularjs-file-model/commit/fd3f179))
* update grunt-coffeelintr to v1.1.1 ([ed7701c](https://github.com/sibiraj-s/angularjs-file-model/commit/ed7701c))

#### Internal

* apply standardjs rules to eslint ([a9d61c9](https://github.com/sibiraj-s/angularjs-file-model/commit/a9d61c9))
* formatted files with two space indentation instead of four ([4ba0481](https://github.com/sibiraj-s/angularjs-file-model/commit/4ba0481))

## v1.0.6 (2018-07-27)

Just a Maintenance Patch

#### Internal

* use eslint to lint javascript files ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
* remove commitizen and cz-conventional-changelog ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
* prevent direct execution of `npm publish` ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
* repo marked as private to prevent accidental publish ([f596aeb](https://github.com/sibiraj-s/angularjs-file-model/commit/f596aeb))
* replace grunt-coffeelint with grunt-coffeelintr ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
* update vscode workspace settings ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))

## v1.0.5 (2018-07-16)

Just a Maintenance Patch

#### Internal

* remove pullapprove
* migrate to travis-ci.com
* remove vulnerable dependencies ([943323b](https://github.com/sibiraj-s/angularjs-file-model/commit/943323b))

## v1.0.4 (2018-05-09)

Just a Maintenance Patch

#### Dependency Updates

* update devDependencies and code maintenance ([b47ccb2](https://github.com/sibiraj-s/angularjs-file-model/commit/b47ccb2))

## v1.0.3 (2018-03-27)

#### Internal

* use npm instead of yarn ([a5cdca8](https://github.com/sibiraj-s/angularjs-file-model/commit/a5cdca8))
* add post build actions ([0e74b39](https://github.com/sibiraj-s/angularjs-file-model/commit/0e74b39))
* remove TREE.md ([7813efd](https://github.com/sibiraj-s/angularjs-file-model/commit/7813efd))
* add shebang line to shell scripts ([60cbd17](https://github.com/sibiraj-s/angularjs-file-model/commit/60cbd17))

#### Dependency Updates

* update devDependencies ([266250a](https://github.com/sibiraj-s/angularjs-file-model/commit/266250a))

## v1.0.2 (2017-11-28)

#### Internal

* publish `dist/` folder directly to npm
* add angularjs as peerDependency
* drop bower support

#### Dependency Updates

* update cz-conventional-changelog to v2.1.0
* update grunt-contrib-uglify to v3.2.1
* update grunt-contrib-coffee to v2.0.0

#### Breaking Changes

* bower installations will not be supported anymore, use npm or yarn

## v1.0.1 (2017-09-07)

#### Features

* bind file directly with ng-model

## v1.0.0 (2017-08-17)

Initial Release. An AngularJS directive to support NgModel for HTML input file types
