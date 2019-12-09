'use strict'

app = angular.module 'angularjsFileModel', []

app.directive 'fileModel', ->

  require: 'ngModel'
  link: (_, element, attrs, ngModel) ->
    element.on 'change', (event) ->

      files = []

      if attrs.asFile isnt undefined
        files = event.target.files
      else
        angular.forEach event.target.files, (item) ->
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
