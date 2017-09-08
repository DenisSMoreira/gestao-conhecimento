'use strict';
angular.module('app').controller('TodoControllerNext', ['$scope', function ($scope) {
        $scope.todos = [
            {text: 'learn Sortable', done: true},
            {text: 'use ng-sortable', done: false},
            {text: 'Enjoy', done: false}
        ];

        $scope.remaining = function () {
            var count = 0;
            angular.forEach($scope.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.sortableConfig = {group: 'todo', animation: 150};
        'Start End Add Update Remove Sort'.split(' ').forEach(function (name) {
            $scope.sortableConfig['on' + name] = console.log.bind(console, name);
        });
    }]);
