const app = angular.module('app', ['angularjsFileModel']);

function FileModelController($scope) {
  $scope.files = null;

  $scope.onFileSelect = function onFileSelect() {
    console.log('Selected Files:', $scope.files);
  };
}
FileModelController.$inject = ['$scope'];

app.controller('FileModelController', FileModelController);

describe('<file-model> directive', () => {
  beforeEach(module('app'));
  let $controller;
  let $compile;
  let $scope;
  let $rootScope;

  beforeEach(inject(($injector) => {
    $controller = $injector.get('$controller');
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');

    $scope = $rootScope.$new();

    $controller('FileModelController', { $scope });
  }));

  it('should bind the <file-model> directive correctly', () => {
    const template = '<input type="file" ng-model="files" file-model ng-change="onFileSelect()">';
    const element = $compile(template)($scope);
    $scope.$digest();

    const file = new File([new ArrayBuffer(2e+5)], 'test-file.jpg', { lastModified: null, type: 'image/jpeg' });

    spyOn($scope, 'onFileSelect');

    element.triggerHandler({
      type: 'change',
      target: {
        files: [file],
      },
    });

    expect($scope.files).toBeTruthy();
    expect(typeof $scope.files).toBe('object');
    expect($scope.files[0] instanceof File).toBe(false);
    expect($scope.files[0].name).toBe('test-file.jpg');
    expect($scope.onFileSelect).toHaveBeenCalled();
  });

  it('should bind the <file-model> directive correctly with `as-file` attribute', () => {
    const template = '<input type="file" ng-model="files" file-model as-file ng-change="onFileSelect()">';
    const element = $compile(template)($scope);
    $scope.$digest();

    const file1 = new File([new ArrayBuffer(2e+5)], 'test-file-1.jpg', { lastModified: null, type: 'image/jpeg' });
    const file2 = new File([new ArrayBuffer(2e+5)], 'test-file-2.jpg', { lastModified: null, type: 'image/jpeg' });

    spyOn($scope, 'onFileSelect');

    element.triggerHandler({
      type: 'change',
      target: {
        files: [file1, file2],
      },
    });

    expect($scope.files).toBeTruthy();
    expect(typeof $scope.files).toBe('object');
    expect($scope.files[0] instanceof File).toBe(true);
    expect($scope.files[1] instanceof File).toBe(true);
    expect($scope.onFileSelect).toHaveBeenCalled();
  });
});
