'use strict';


// Declare app level module which depends on filters, and services
angular.module('chuangplus', [
    'ngRoute',
    'ui.tinymce',
    'ui.bootstrap',
    'ngCookies',
    'angularFileUpload',
    'angular-google-analytics',
    'chuangplus.filters',
    'chuangplus.services',
    'chuangplus.directives',
    'chuangplus.controllers',
    //semantic directives
    'angularify.semantic.accordion',
	'angularify.semantic.checkbox',
	'angularify.semantic.dimmer',
	'angularify.semantic.dropdown',
	'angularify.semantic.modal',
	'angularify.semantic.popup',
	'angularify.semantic.rating',
	'angularify.semantic.sidebar',
	'angularify.semantic.wizard'
]).
    constant('urls', {'part': '/static/partials', 'api': '/api'}).
    config(['$interpolateProvider', function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]).
    config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }]).
    config(['$routeProvider', '$locationProvider', 'urls', function($routeProvider, $locationProvider, urls) {
        //Route configure
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '';
        $routeProvider.when('/', {templateUrl: urls.part + '/homepage.html', controller: 'HomepageCtrl', title: 'HomePage'});
        $routeProvider.when('/invest', {templateUrl: urls.part + '/invest.html', controller: 'Homepage_InvCtrl', title: "InvestPage"});
        $routeProvider.when('/financing', {templateUrl: urls.part + '/financing.html', controller: 'FinancingCtrl', title: 'FinancingPage'});
        $routeProvider.when('/about', {templateUrl: urls.part + '/about.html', controller: 'AboutCtrl', title: 'AboutPage'});
        $routeProvider.when('/login', {templateUrl: urls.part + '/login/login.html', controller: 'LoginCtrl', title: 'LoginPage'});
        $routeProvider.when('/regist_startup', {templateUrl: urls.part + '/regist/regist_startup.html', controller: 'RegistStartupCtrl', title: 'RegistStartupPage'});
        $routeProvider.when('/regist_invest_auth', {templateUrl: urls.part + '/regist/regist_invest_auth.html', controller: 'RegistInvestAuthCtrl', title: 'RegistInvestAuthPage'});
        $routeProvider.when('/regist_invest_info', {templateUrl: urls.part + '/regist/regist_invest_info.html', controller: 'RegistInvestInfoCtrl', title: 'RegistInvestInfoPage'});
        $routeProvider.when('/regist_invest_finish', {templateUrl: urls.part + '/regist/regist_invest_finish.html', controller: 'RegistInvestFinishCtrl', title: 'RegistStartupFinishPage'});
        $routeProvider.when('/financingprocess', {templateUrl: urls.part + '/financingprocess.html', controller: 'FinancingProcessCtrl', title: 'FinancingProcessPage'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]).
//  apply a acount number for the detection~
    config(function(AnalyticsProvider){
        AnalyticsProvider.setAccount('UA-60524165-1');
        AnalyticsProvider.trackPages(true);
        AnalyticsProvider.trackUrlParams(true);
        AnalyticsProvider.useDisplayFeatures(true);
    }).
    run(['$location', '$rootScope', function($location, $rootScope){
        //Configure header title of the page
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
            $rootScope.title = current.$$route.title;
        });
    }]);