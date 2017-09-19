/* global go, vis */

var app = angular.module('app', ['ngResource', 'as.sortable', 'ui.router', 'principal', 'profile', 'group', 'ngMaterial', 'ngMdIcons', 'chart.js', 'ngVis']);
app.run(function ($state) {
    $state.go('page.principal');
});

//app.directive('userAvatar', function () {
//    return {
//        replace: true,
//        template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
//    };
//});

//app.directive('goDiagram', function () {
//    return {
//        restrict: 'E',
//        template: '<div></div>', // just an empty DIV element
//        replace: true,
//        scope: {model: '=goModel'},
//        link: function (scope, element, attrs) {
//            if (window.goSamples)
//                goSamples(); // init for these samples -- you don't need to call this
//            var $ = go.GraphObject.make;
//            var diagram = // create a Diagram for the given HTML DIV element
//                    $(go.Diagram, element[0],
//                            {
//                                nodeTemplate: $(go.Node, "Auto",
//                                        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
//                                        $(go.Shape, "RoundedRectangle", new go.Binding("fill", "color"),
//                                                {
//                                                    portId: "", cursor: "pointer", strokeWidth: 0,
//                                                    fromLinkable: true, toLinkable: true,
//                                                    fromLinkableSelfNode: true, toLinkableSelfNode: true,
//                                                    fromLinkableDuplicates: true, toLinkableDuplicates: true
//                                                }),
//                                        $(go.TextBlock, {margin: 8, editable: true},
//                                                new go.Binding("text", "name").makeTwoWay())
//                                        ),
//                                linkTemplate: $(go.Link,
//                                        {relinkableFrom: true, relinkableTo: true},
//                                        $(go.Shape),
//                                        $(go.Shape, {toArrow: "Standard", stroke: null, strokeWidth: 0})
//                                        ),
//                                initialContentAlignment: go.Spot.Center,
//                                "ModelChanged": updateAngular,
//                                "ChangedSelection": updateSelection,
//                                "undoManager.isEnabled": true
//                            });
//            // whenever a GoJS transaction has finished modifying the model, update all Angular bindings
//            function updateAngular(e) {
//                if (e.isTransactionFinished) {
//                    scope.$apply();
//                }
//            }
//            // update the Angular model when the Diagram.selection changes
//            function updateSelection(e) {
//                diagram.model.selectedNodeData = null;
//                var it = diagram.selection.iterator;
//                while (it.next()) {
//                    var selnode = it.value;
//                    // ignore a selected link or a deleted node
//                    if (selnode instanceof go.Node && selnode.data !== null) {
//                        diagram.model.selectedNodeData = selnode.data;
//                        break;
//                    }
//                }
//                scope.$apply();
//            }
//            // notice when the value of "model" changes: update the Diagram.model
//            scope.$watch("model", function (newmodel) {
//                var oldmodel = diagram.model;
//                if (oldmodel !== newmodel) {
//                    diagram.removeDiagramListener("ChangedSelection", updateSelection);
//                    diagram.model = newmodel;
//                    diagram.addDiagramListener("ChangedSelection", updateSelection);
//                }
//            });
//            scope.$watch("model.selectedNodeData.name", function (newname) {
//                if (!diagram.model.selectedNodeData)
//                    return;
//                // disable recursive updates
//                diagram.removeModelChangedListener(updateAngular);
//                // change the name
//                diagram.startTransaction("change name");
//                // the data property has already been modified, so setDataProperty would have no effect
//                var node = diagram.findNodeForData(diagram.model.selectedNodeData);
//                if (node !== null)
//                    node.updateTargetBindings("name");
//                diagram.commitTransaction("change name");
//                // re-enable normal updates
//                diagram.addModelChangedListener(updateAngular);
//            });
//        }
//    };
//});


app.config(function ($urlRouterProvider, $stateProvider, $mdThemingProvider, ChartJsProvider) {

    ChartJsProvider.setOptions({
        global: {
            colors: ['#45b7cd', '#ff6384', '#ff8e72', '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
//            defaultFontColor: '#DCDCDC',
            defaultFontFamily: 'Roboto',
            defaultFontSize: 12,
            defaultHeight: 250
        },
//        responsive: false
//        maintainAspectRatio: false
//        barDatasetSpacing: 1,
//        barShowStroke: true,
//        barStrokeWidth: 1,
//        barValueSpacing: 1
    });

// Configure all doughnut charts
//    ChartJsProvider.setOptions('Doughnut', {
//        animateScale: true
//    });

//    $scope.chart.options = {
//        responsive: true,
//        maintainAspectRatio: true,
//        barDatasetSpacing: 1,
//        barShowStroke: true,
//        barStrokeWidth: 2,
//        barValueSpacing: 5
//    };

//    Chart.defaults.global.defaultHeight = 250;

    var customBlueMap = $mdThemingProvider.extendPalette('blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);

    $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
                'default': '500',
                'hue-1': '50'
            })
            .accentPalette('red');

    $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey');


    $stateProvider
            .state('page', {
                url: '/page',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('page.principal', {
                url: '/principal',
                templateUrl: 'modules/principal/principal.view.html',
                controller: 'PrincipalController'
            })
            .state('page.group', {
                url: '/group',
                templateUrl: 'modules/group/group.view.html',
                controller: 'GroupController'
            })
            .state('page.profile', {
                url: '/profile',
                templateUrl: 'modules/profile/profile.view.html',
                controller: 'ProfileController'
            });


    $urlRouterProvider.otherwise('/');
});