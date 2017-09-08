var app = angular.module('app', ['ngResource', 'as.sortable', 'ui.router']);
app.run(function ($state) {
    $state.go('page.principal');
});

app.config(function ($urlRouterProvider, $stateProvider) {

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
            });


    $urlRouterProvider.otherwise('/');
});