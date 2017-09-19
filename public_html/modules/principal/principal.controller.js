'use strict';
angular.module('principal').controller('PrincipalController', function ($scope, $state, $mdSidenav, $mdBottomSheet, $mdDialog, VisDataSet) {

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menu = [
        {
            link: '',
            title: 'Perfil',
            icon: 'account_circle'
        },
        {
            link: '',
            title: 'Time',
            icon: 'group'
        }
    ];
    $scope.admin = [

        {
            link: '',
            title: 'Mapa',
            icon: 'map'
        },
        {
            link: '',
            title: 'Influencia',
            icon: 'group_work'
        }
    ];
    $scope.activity = [
        {
            what: 'Brunch this weekend?',
            who: 'Ali Conners',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            what: 'Summer BBQ',
            who: 'to Alex, Scott, Jennifer',
            when: '3:08PM',
            notes: "Wish I could come out but I'm out of town this weekend"
        },
        {
            what: 'Oui Oui',
            who: 'Sandra Adams',
            when: '3:08PM',
            notes: "Do you have Paris recommendations? Have you ever been?"
        },
        {
            what: 'Birthday Gift',
            who: 'Trevor Hansen',
            when: '3:08PM',
            notes: "Have any ideas of what we should get Heidi for her birthday?"
        },
        {
            what: 'Recipe to try',
            who: 'Brian Holt',
            when: '3:08PM',
            notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
        }
    ];
    $scope.alert = '';

    $scope.showListBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showAdd = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
            targetEvent: ev
        }).then(function (answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.alert = 'You cancelled the dialog.';
        });
    };

    $scope.items = [
        {name: 'Share', icon: 'share'},
        {name: 'Upload', icon: 'upload'},
        {name: 'Copy', icon: 'copy'},
        {name: 'Print this page', icon: 'print'},
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };


    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];
    $scope.series = ['Foo', 'Baz', 'Bar'];

//    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
//    $scope.data = [300, 500, 100, 40, 120];
    $scope.type = 'polarArea';

    $scope.toggle = function () {
        $scope.type = $scope.type === 'polarArea' ?
                'pie' : 'polarArea';
    };

    $scope.seriess = ['Series A', 'Series B'];

    $scope.datas = [
        [{
                x: 40,
                y: 20,
                r: 20
            }],
        [{
                x: 10,
                y: 40,
                r: 50
            }],
        [{
                x: 15,
                y: 42,
                r: 53
            }]
                ,
        [{
                x: 15,
                y: 22,
                r: 53
            }]
                ,
        [{
                x: 11,
                y: 22,
                r: 55
            }]
                ,
        [{
                x: 32,
                y: 12,
                r: 44
            }]
    ];

    $scope.labels = ["JUnit", "ElasticSearch", "Spring", "Java", "Camel", "MongoDB", "SQL"];

    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];

    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.data1 = [
        [65, -59, 80, 81, -56, 55, -40],
        [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [
        {
            label: "Bar chart",
            borderWidth: 1,
            type: 'bar'
        },
        {
            label: "Line chart",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            type: 'line'
        }
    ];

    var groups = VisDataSet([
        {id: 0, content: 'First', value: 1},
        {id: 1, content: 'Third', value: 3},
        {id: 2, content: 'Second', value: 2}
    ]);
    var items = VisDataSet([
        {id: 0, group: 0, content: 'item 0', start: new Date(2014, 3, 17), end: new Date(2014, 3, 21)},
        {id: 1, group: 0, content: 'item 1', start: new Date(2014, 3, 19), end: new Date(2014, 3, 20)},
        {id: 2, group: 1, content: 'item 2', start: new Date(2014, 3, 16), end: new Date(2014, 3, 24)},
        {id: 3, group: 1, content: 'item 3', start: new Date(2014, 3, 23), end: new Date(2014, 3, 24)},
        {id: 4, group: 1, content: 'item 4', start: new Date(2014, 3, 22), end: new Date(2014, 3, 26)},
        {id: 5, group: 2, content: 'item 5', start: new Date(2014, 3, 24), end: new Date(2014, 3, 27)}
    ]);

    $scope.data4 = {groups: groups, items: items};

    $scope.events4 = {
        rangechange: $scope.onRangeChange,
        rangechanged: $scope.onRangeChanged,
        onload: $scope.onLoaded,
        select: $scope.onSelect,
        click: $scope.onClick,
        doubleClick: $scope.onDoubleClick,
        contextmenu: $scope.rightClick
    };

    var options = {
        align: 'center', // left | right (String)
        autoResize: true, // false (Boolean)
        editable: true,
        selectable: true,
        // start: null,
        // end: null,
        // height: null,
        // width: '100%',
        // margin: {
        //   axis: 20,
        //   item: 10
        // },
        // min: null,
        // max: null,
        // maxHeight: null,
        orientation: 'bottom',
        // padding: 5,
        showCurrentTime: true,
        showMajorLabels: true,
        showMinorLabels: true
                // type: 'box', // dot | point
                // zoomMin: 1000,
                // zoomMax: 1000 * 60 * 60 * 24 * 30 * 12 * 10,
                // groupOrder: 'content'
    };
    var orderedContent = 'content';
    $scope.options = angular.extend(options, {
        groupOrder: orderedContent,
        editable: true
    });
    $scope.defaults = {
        orientation: ['top', 'bottom'],
        autoResize: [true, false],
        showCurrentTime: [true, false],
        showMajorLabels: [true, false],
        showMinorLabels: [true, false],
        align: ['left', 'center', 'right'],
        stack: [true, false],

        moveable: [true, false],
        zoomable: [true, false],
        selectable: [true, false],
        editable: [true, false]
    };

//    $scope.events = {
//        rangechange: $scope.onRangeChange,
//        rangechanged: $scope.onRangeChanged,
//        onload: $scope.onLoaded,
//        select: $scope.onSelect,
//        click: $scope.onClick,
//        doubleClick: $scope.onDoubleClick,
//        contextmenu: $scope.rightClick
//    };

    $scope.options4 = {
        "align": "center",
        "autoResize": true,
        "editable": true,
        "selectable": true,
        "orientation": "bottom",
        "showCurrentTime": true,
        "showMajorLabels": true,
        "showMinorLabels": true
    };

    var DIR = 'images/face-0';

    var nodes = [
        {id: 1, shape: 'circularImage', image: DIR + '1.jpg'},
        {id: 2, shape: 'circularImage', image: DIR + '2.jpg'},
        {id: 3, shape: 'circularImage', image: DIR + '3.jpg'},
        {id: 4, shape: 'circularImage', image: DIR + '4.jpg', label: "Esse é o cara!"},
        {id: 5, shape: 'circularImage', image: DIR + '5.jpg'},
        {id: 6, shape: 'circularImage', image: DIR + '6.jpg'},
        {id: 7, shape: 'circularImage', image: DIR + '7.jpg'},
        {id: 8, shape: 'circularImage', image: DIR + '8.jpg'},
        {id: 9, shape: 'circularImage', image: DIR + '9.jpg'},
        {id: 10, shape: 'circularImage', image: DIR + '1.jpg'},
        {id: 11, shape: 'circularImage', image: DIR + '1.jpg'},
        {id: 12, shape: 'circularImage', image: DIR + '2.jpg'},
        {id: 13, shape: 'circularImage', image: DIR + '3.jpg'},
        {id: 14, shape: 'circularImage', image: DIR + '4.jpg'}
    ];


    var edges = [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 4, to: 5},
        {from: 4, to: 10},
        {from: 4, to: 6},
        {from: 6, to: 7},
        {from: 7, to: 8},
        {from: 8, to: 9},
        {from: 8, to: 10},
        {from: 10, to: 11},
        {from: 11, to: 12},
        {from: 12, to: 13},
        {from: 13, to: 14}
//        {from: 9, to: 16}
    ];
    // provide the data in the vis format
    $scope.data5 = {
        nodes: nodes,
        edges: edges
    };

    $scope.options5 = {
        align: "center",
        autoResize: true,
        height: '100%',
        width: '100%',
        clickToUse: false,
        nodes: {
            borderWidth: 4,
            size: 30,
            color: {
                border: '#3b5eb2'
            },
            font: {color: '#3b5eb2'}
        },
        edges: {
            color: '#3b5eb2'
        }
    };


//    // initialize your network!
//    var network = new vis.Network(container, data, options);

});

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}
;



