angular.module("shellModule",
    [
        {
            name: 'ngGrid',
            files: [
                'third_party/ng-grid-2.0.12.debug.js',
                'third_party/ng-grid.css'
            ]
        }
    ]
)
    .controller('ShellController', ['$scope', function ($scope) {

    }]);