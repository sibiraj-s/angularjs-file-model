'use strict'

app = angular.module 'angularjsFileModel', []

app.directive 'fileModel', ->

  require: 'ngModel'
  link: (scope, element, attrs, ngModel) ->
    element.on 'change', (e) ->

      files = []

      if attrs.asFile isnt undefined
        files = element[0].files
      else
        angular.forEach element[0].files, (item) ->
          file =
            name: item.name
            size: item.size
            type: item.type
            lastModified: item.lastModified
            lastModifiedDate: item.lastModifiedDate
            url: URL.createObjectURL(item)
            _file: item
          files.push file
          return

      ngModel.$setViewValue files
      return

    return
