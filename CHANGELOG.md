# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal
> - Unreleased

## v1.0.9 (2019-12-13)

#### Internal

- update LICENSE ([2e52677](https://github.com/sibiraj-s/angularjs-file-model/commit/2e52677))

## v1.0.8 (2019-12-09)

#### Internal

- migrate from travis-ci to github actions ([00c3118](https://github.com/sibiraj-s/angularjs-file-model/commit/00c3118))
- add karma-jasmine unit tests ([7ee527a](https://github.com/sibiraj-s/angularjs-file-model/commit/7ee527a))

#### Dependency Updates

- bump devDependencies ([b79a790](https://github.com/sibiraj-s/angularjs-file-model/commit/b79a790))
- update eslint to v5.11.1 ([fd9dc2a](https://github.com/sibiraj-s/angularjs-file-model/commit/fd9dc2a))
- update grunt-coffeelintr to v1.1.2 ([fd9dc2a](https://github.com/sibiraj-s/angularjs-file-model/commit/fd9dc2a))
- update husky to v1.3.1 ([fd9dc2a](https://github.com/sibiraj-s/angularjs-file-model/commit/fd9dc2a))

## v1.0.7 (2018-10-05)

#### Dependency Updates

- update grunt-contrib-uglify to v4.0.0 ([fd3f179](https://github.com/sibiraj-s/angularjs-file-model/commit/fd3f179))
- update grunt-coffeelintr to v1.1.1 ([ed7701c](https://github.com/sibiraj-s/angularjs-file-model/commit/ed7701c))
- update eslint to v5.6.1 ([cf81b12](https://github.com/sibiraj-s/angularjs-file-model/commit/cf81b12))
- update husky to v1.1.0 ([cf81b12](https://github.com/sibiraj-s/angularjs-file-model/commit/cf81b12))
- update eslint-plugin-promise to v4.0.1 ([cf81b12](https://github.com/sibiraj-s/angularjs-file-model/commit/cf81b12))

#### Internal

- apply standardjs rules to eslint ([a9d61c9](https://github.com/sibiraj-s/angularjs-file-model/commit/a9d61c9))
- formatted files with two space indentation instead of four ([4ba0481](https://github.com/sibiraj-s/angularjs-file-model/commit/4ba0481))
- remove vscode config in favour of editorconfig ([4644e54](https://github.com/sibiraj-s/angularjs-file-model/commit/4644e54))
- update github username ([cb5852c](https://github.com/sibiraj-s/angularjs-file-model/commit/cb5852c))

## v1.0.6 (2018-07-27)

Just a Maintenance Patch

#### Internal

- use eslint to lint javascript files ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
- remove commitizen and cz-conventional-changelog ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
- prevent direct execution of `npm publish` ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
- repo marked as private to prevent accidental publish ([f596aeb](https://github.com/sibiraj-s/angularjs-file-model/commit/f596aeb))
- replace grunt-coffeelint with grunt-coffeelintr ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))
- update vscode workspace settings ([829f158](https://github.com/sibiraj-s/angularjs-file-model/commit/829f158))

## v1.0.5 (2018-07-16)

Just a Maintenance Patch

#### Internal

- remove pullapprove
- migrate to travis-ci.com
- remove vulnerable dependencies ([943323b](https://github.com/sibiraj-s/angularjs-file-model/commit/943323b))

## v1.0.4 (2018-05-09)

Just a Maintenance Patch

#### Dependency Updates

- update devDependencies and code maintenance ([b47ccb2](https://github.com/sibiraj-s/angularjs-file-model/commit/b47ccb2))

## v1.0.3 (2018-03-27)

#### Internal

- use npm instead of yarn ([a5cdca8](https://github.com/sibiraj-s/angularjs-file-model/commit/a5cdca8))
- add post build actions ([0e74b39](https://github.com/sibiraj-s/angularjs-file-model/commit/0e74b39))
- remove TREE.md ([7813efd](https://github.com/sibiraj-s/angularjs-file-model/commit/7813efd))
- add shebang line to shell scripts ([60cbd17](https://github.com/sibiraj-s/angularjs-file-model/commit/60cbd17))

#### Dependency Updates

- update devDependencies ([266250a](https://github.com/sibiraj-s/angularjs-file-model/commit/266250a))

## v1.0.2 (2017-11-28)

#### Internal

- publish `dist/` folder directly to npm
- add angularjs as peerDependency
- drop bower support

#### Dependency Updates

- update cz-conventional-changelog to v2.1.0
- update grunt-contrib-uglify to v3.2.1
- update grunt-contrib-coffee to v2.0.0

#### Breaking Changes

- bower installations will not be supported anymore, use npm or yarn

## v1.0.1 (2017-09-07)

#### Features

- bind file directly with ng-model

## v1.0.0 (2017-08-17)

Initial Release. An AngularJS directive to support NgModel for HTML input file types
