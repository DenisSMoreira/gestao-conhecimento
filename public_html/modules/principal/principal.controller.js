'use strict';
angular.module('principal').controller('PrincipalController', function ($scope, $state) {

    //Redirect to the task list screen
    $scope.goPrincipal = function () {
        $state.go("page.principal");
    };




});
