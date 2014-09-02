angular.module("loginModule", ['oc.lazyLoad'])
    .controller('loginController', ['$scope', function ($scope) {
        $scope.mail = "";
        console.log("controller ok");

}]);