﻿var app = angular.module('registration', ['ngRoute']).config(function ($routeProvider) {
    'use strict';
    $routeProvider.when("/step1", {
        controller: "RegistrationCtrl",
        templateUrl: "/scripts/app/views/step1.html"
    });

    $routeProvider.when("/step2", {
        controller: "RegistrationCtrl",
        templateUrl: "/scripts/app/views/step2.html"
    });

    $routeProvider.when("/step3", {
        controller: "RegistrationCtrl",
        templateUrl: "/scripts/app/views/step3.html"
    });

    $routeProvider.otherwise({ redirectTo: "/step1" });
});