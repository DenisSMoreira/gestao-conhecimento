'use strict';
angular.module('profile').controller('ProfileController', function ($scope, $state) {

    $scope.user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: 'Jon',
        phone: '0199716045',
        lastName: '',
        submissionDate: new Date(),
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        biography: '\nLoves kittens, snowboarding, and can type at 130 WPM.\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043'
    };
});
