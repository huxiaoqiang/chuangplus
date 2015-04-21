'use strict';


// Declare app level module which depends on filters, and services
angular.module('chuangplus', [
    'ngRoute',
    'ui.tinymce',
    'ui.bootstrap',
    'ngCookies',
    'angularFileUpload',
    'angular-google-analytics',
    'angularFileUpload',
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
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }]).
    config(['$routeProvider', '$locationProvider', 'urls', function($routeProvider, $locationProvider, urls) {
        //Route configure
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '';
        $routeProvider.when('/', {templateUrl: urls.part + '/homepage.html', controller: 'HomepageCtrl', title: 'HomePage'});
        $routeProvider.when('/invest', {templateUrl: urls.part + '/invest.html', controller: 'Homepage_InvCtrl', title: "InvestPage"});
        $routeProvider.when('/financing', {templateUrl: urls.part + '/financing.html', controller: 'FinancingCtrl', title: 'FinancingPage'});
        $routeProvider.when('/about', {templateUrl: urls.part + '/staticpage/about.html', controller: 'AboutCtrl', title: 'AboutPage'});
        $routeProvider.when('/login', {templateUrl: urls.part + '/login/login.html', controller: 'LoginCtrl', title: 'LoginPage'});
        $routeProvider.when('/regist_startup', {templateUrl: urls.part + '/regist/regist_startup.html', controller: 'RegistStartupCtrl', title: 'RegistStartupPage'});

        $routeProvider.when('/regist_invest', {templateUrl: urls.part + '/regist/regist_invest.html', controller: 'RegistInvestCtrl', title: 'RegistInvestPage'});

        $routeProvider.when('/regist_startup_finish', {templateUrl: urls.part + '/regist/regist_startup_finish.html', controller: 'RegistStartupFinishCtrl', title: 'RegistStartupFinishPage'});

        $routeProvider.when('/regist_invest_auth', {templateUrl: urls.part + '/regist/regist_invest_auth.html', controller: 'RegistInvestAuthCtrl', title: 'RegistInvestAuthPage'});

        $routeProvider.when('/regist_invest_info', {templateUrl: urls.part + '/regist/regist_invest_info.html', controller: 'RegistStartupInfoCtrl', title: 'RegistStartupInfoPage'});
        $routeProvider.when('/regist_invest_finish', {templateUrl: urls.part + '/regist/regist_invest_finish.html', controller: 'RegistStartupFinishCtrl', title: 'RegistStartupFinishPage'});


        $routeProvider.when('/regist_invest_info', {templateUrl: urls.part + '/regist/regist_invest_info.html', controller: 'RegistInvestInfoCtrl', title: 'RegistInvestInfoPage'});
        $routeProvider.when('/regist_invest_finish', {templateUrl: urls.part + '/regist/regist_invest_finish.html', controller: 'RegistInvestFinishCtrl', title: 'RegistStartupFinishPage'});
        $routeProvider.when('/financingprocess', {templateUrl: urls.part + '/financingprocess.html', controller: 'FinancingProcessCtrl', title: 'FinancingProcessPage'});
        $routeProvider.when('/privacypolicy', {templateUrl: urls.part + '/privacypolicy.html', controller: 'PrivacyPolicyCtrl', title: 'PrivacyPolicyPage'});
        $routeProvider.when('/library', {templateUrl: urls.part + '/library.html', controller: 'libraryCtrl', title: 'library'});

        $routeProvider.when('/projectdetail/roadshow', {templateUrl: urls.part + '/projectdetail/roadshow.html', controller: 'projectdetailRoadshowCtrl', title: 'projectdetailRoadshow'});
        $routeProvider.when('/projectdetail/text', {templateUrl: urls.part + '/projectdetail/text.html', controller: 'projectdetailTextCtrl', title: 'projectdetailText'});
        $routeProvider.when('/projectdetail/joinus', {templateUrl: urls.part + '/projectdetail/joinus.html', controller: 'projectdetailJoinusCtrl', title: 'projectdetailJoinus'});

        $routeProvider.when('/internship', {templateUrl: urls.part + '/internship.html', controller: 'internshipCtrl', title: 'internship'});

        
        $routeProvider.when('/createproject', {templateUrl: urls.part + '/createproject.html', controller: 'createproject', title: 'createproject'});
        //createproject pages
        $routeProvider.when('/createproject/step1', {templateUrl: urls.part + '/createproject/step1.html', controller: 'Step1Ctrl', title: 'Step1'});
        $routeProvider.when('/createproject/step2', {templateUrl: urls.part + '/createproject/step2.html', controller: 'Step2Ctrl', title: 'Step2'});
        $routeProvider.when('/createproject/step3', {templateUrl: urls.part + '/createproject/step3.html', controller: 'Step3Ctrl', title: 'Step3'});
        $routeProvider.when('/createproject/step4', {templateUrl: urls.part + '/createproject/step4.html', controller: 'Step4Ctrl', title: 'Step4'});
        $routeProvider.when('/createproject/step5', {templateUrl: urls.part + '/createproject/step5.html', controller: 'Step5Ctrl', title: 'Step5'});
        $routeProvider.when('/createproject/step6', {templateUrl: urls.part + '/createproject/step6.html', controller: 'Step6Ctrl', title: 'Step6'});
        
        // staticpage of "aboutus"
        $routeProvider.when('/privacypolicy', {templateUrl: urls.part + '/staticpage/privacypolicy.html', controller: 'PrivacyPolicyCtrl', title: 'PrivacyPolicyPage'});
        $routeProvider.when('/contact', {templateUrl: urls.part + '/staticpage/contact.html', controller: 'ContactCtrl', title: 'ContactPage'});
        $routeProvider.when('/jobs', {templateUrl: urls.part + '/staticpage/jobs.html', controller: 'JobsCtrl', title: 'JobsPage'});
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