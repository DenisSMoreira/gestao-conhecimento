var app = angular.module('app', ['ngResource', 'as.sortable', 'ui.router', 'principal', 'profile', 'group']);
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