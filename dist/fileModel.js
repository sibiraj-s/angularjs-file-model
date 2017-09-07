/*!
 * @module angularjs-file-model
 * @description AngularJS directive to support NgModel for HTML input file types
 * @version v1.0.1
 * @link https://github.com/Sibiraj-S/angularjs-file-model
 * @licence MIT License, https://opensource.org/licenses/MIT
 */

(function() {
  'use strict';
  var app;

  app = angular.module('angularjsFileModel', []);

  app.directive('fileModel', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.on('change', function(e) {
          var files;
          files = [];
          if (attrs.asFile !== void 0) {
            files = element[0].files;
          } else {
            angular.forEach(element[0].files, function(item) {
              var file;
              file = {
                name: item.name,
                size: item.size,
                type: item.type,
                lastModified: item.lastModified,
                lastModifiedDate: item.lastModifiedDate,
                url: URL.createObjectURL(item),
                _file: item
              };
              files.push(file);
            });
          }
          ngModel.$setViewValue(files);
        });
      }
    };
  });

}).call(this);
