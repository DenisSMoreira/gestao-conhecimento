'use strict';
angular.module('group').controller('GroupController', function ($scope, $state, $mdDialog) {
    $state.visible = false;
    
    $scope.onNewBoardClick = function () {
        var confirm = $mdDialog.prompt()
                .title('Create Board')
                .placeholder('Board name')
                .ariaLabel('Board name')
                .targetEvent(event)
                .ok('Enter Board')
                .cancel('Cancel');

        $mdDialog.show(confirm).then(function (boardName) {
            if (!boardName || boardName === 0) {
                return;
            }
            $state.visible = true;
        }, angular.noop);

    };


//    $scope.teams = [
//        {
//            name: 'team 1',
//            users: [
//                {
//                    name: 'Denis',
//                    img: 'images/face-01.jpg'
//                },
//                {
//                    name: 'Cesar',
//                    img: 'images/face-02.jpg'
//                },
//                {
//                    name: 'Treinee',
//                    img: 'images/face-03.jpg'
//                }
//            ]
//        },
//        {
//            name: 'team 2',
//            users: [
//                {
//                    name: 'asd',
//                    img: 'images/face-03.jpg'
//                },
//                {
//                    name: 'asddfd',
//                    img: 'images/face-04.jpg'
//                },
//                {
//                    name: '3434',
//                    img: 'images/face-05.jpg'
//                }
//            ]
//        }
//    ];
//
//    $scope.userss = [{
//            name: 'asd',
//            img: 'images/face-03.jpg'
//        },
//        {
//            name: 'asddfd',
//            img: 'images/face-04.jpg'
//        },
//        {
//            name: '3434',
//            img: 'images/face-05.jpg'
//        }];
//
//    $scope.sortableOptions = {
//        allowDuplicates: true
//    };
//    $scope.sortableCloneOptions = {
//        clone: true
//    };

});
