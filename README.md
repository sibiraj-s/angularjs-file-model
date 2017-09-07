# angularjs-file-model

AngularJS directive to support NgModel for HTML input file types

## Getting Started

### Installation

You can directly clone/download [here][angularjs-file-model]

```bash
git clone git@github.com:Sibiraj-S/angularjs-file-model.git
```

or use cdn

#### Minified

```bash
//unpkg.com/angularjs-file-model@latest/dist/fileModel.min.js
```

#### Pretty Printed

```bash
//unpkg.com/angularjs-file-model@latest/dist/fileModel.js
```

or

Install via Package managers such as [npm], [yarn] and [bower]

```bash
npm install angularjs-file-model --save
# or
yarn add angularjs-file-model
# or
bower install angularjs-file-model --save
```

### Usage

Import the modules required for angularjs-file-model.

```html
<script src="angular/angular.min.js"></script>
<script src="angularjs-file-model/dist/fileModel.min.js"></script>
```

add `angularjsFileModel` dependency to the module

```javascript
angular.module('myApp', ['angularjsFileModel'])
```

and in your html

```html
<input type="file" ng-model="files" file-model ng-change="onFileSelect()">
```

or

```html
<input type="file" ng-model="files" file-model as-file ng-change="onFileSelect()">
```

### Option

`as-file` will bind the file object to the ng-model without it only plain object with file properties will bind to ng-model

[angularjs-file-model]: https://github.com/Sibiraj-S/angularjs-file-model
[bower]: https://bower.io/
[github]: https://sibiraj-s.github.io/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
