'use strict';


// Declare app level module which depends on filters, and services
angular.module('chuangplus', [
    'ngRoute',
    'ui.tinymce',
    'ui.bootstrap',
    'ngCookies',
    'ngFileUpload',
    'ngScrollTo',
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
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }]).
    config(['$routeProvider', '$locationProvider', 'urls', function($routeProvider, $locationProvider, urls) {
        //Route configure
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix = '';
        $routeProvider.when('/', {templateUrl: urls.part + '/homepage.html', controller: 'HomepageCtrl', title: 'HomePage'});
        $routeProvider.when('/invest', {templateUrl: urls.part + '/invest.html', controller: 'Homepage_InvCtrl', title: "InvestPage"});
        $routeProvider.when('/financing', {templateUrl: urls.part + '/financing.html', controller: 'FinancingCtrl', title: 'FinancingPage'});
        $routeProvider.when('/login', {templateUrl: urls.part + '/login/login.html', controller: 'LoginCtrl', title: 'LoginPage'});
        
        //personalcenter
        $routeProvider.when('/user/myproject', {templateUrl: urls.part + '/personalcenter/myproject.html', controller: 'MyprojectCtrl', title: 'MyprojectPage'});
        $routeProvider.when('/user/userinfo', {templateUrl: urls.part + '/personalcenter/userinfo.html', controller: 'UserinfoCtrl', title: 'UserinfoPage'});
        //regist
        $routeProvider.when('/regist_invest_auth', {templateUrl: urls.part + '/regist/regist_invest_auth.html', controller: 'RegistInvestAuthCtrl', title: 'RegistInvestAuthPage'});
        $routeProvider.when('/regist_invest_info', {templateUrl: urls.part + '/regist/regist_invest_info.html', controller: 'RegistInvestInfoCtrl', title: 'RegistInvestInfoPage'});
        $routeProvider.when('/regist_invest_finish', {templateUrl: urls.part + '/regist/regist_invest_finish.html', controller: 'RegistInvestFinishCtrl', title: 'RegistStartupFinishPage'});
        $routeProvider.when('/regist_startup', {templateUrl: urls.part + '/regist/regist_startup.html', controller: 'RegistStartupCtrl', title: 'RegistStartupPage'});
        $routeProvider.when('/regist_startup_finish', {templateUrl: urls.part + '/regist/regist_startup_finish.html', controller: 'RegistStartupFinishCtrl', title: 'RegistStartupFinishPage'});


        $routeProvider.when('/financingprocess', {templateUrl: urls.part + '/financingprocess.html', controller: 'FinancingProcessCtrl', title: 'FinancingProcessPage'});

        $routeProvider.when('/privacypolicy', {templateUrl: urls.part + '/privacypolicy.html', controller: 'PrivacyPolicyCtrl', title: 'PrivacyPolicyPage'});
        $routeProvider.when('/library/:filters', {templateUrl: urls.part + '/library.html', controller: 'libraryCtrl', title: 'library'});

        $routeProvider.when('/projectdetail/roadshow/:pro_id', {templateUrl: urls.part + '/projectdetail/roadshow.html', controller: 'projectdetailRoadshowCtrl', title: 'projectdetailRoadshow'});
        $routeProvider.when('/projectdetail/text/:pro_id', {templateUrl: urls.part + '/projectdetail/text.html', controller: 'projectdetailTextCtrl', title: 'projectdetailText'});
        $routeProvider.when('/projectdetail/joinus', {templateUrl: urls.part + '/projectdetail/joinus.html', controller: 'projectdetailJoinusCtrl', title: 'projectdetailJoinus'});


        $routeProvider.when('/internship', {templateUrl: urls.part + '/internship.html', controller: 'internshipCtrl', title: 'internship'});
        $routeProvider.when('/createproject', {templateUrl: urls.part + '/createproject.html', controller: 'createproject', title: 'createproject'});
        // staticpage of "aboutus"
        $routeProvider.when('/about', {templateUrl: urls.part + '/staticpage/about.html', controller: 'AboutCtrl', title: 'AboutPage'});
        $routeProvider.when('/coffee', {templateUrl: urls.part + '/staticpage/coffee.html', controller: 'coffeeCtrl', title: 'coffeePage'});
        $routeProvider.when('/contact', {templateUrl: urls.part + '/staticpage/contact.html', controller: 'governmentCtrl', title: 'governmentPage'});
        $routeProvider.when('/government', {templateUrl: urls.part + '/staticpage/government.html', controller: 'JobsCtrl', title: 'JobsPage'});
        $routeProvider.when('/jobs', {templateUrl: urls.part + '/staticpage/jobs.html', controller: 'JobsCtrl', title: 'JobsPage'});
        $routeProvider.when('/notice', {templateUrl: urls.part + '/staticpage/notice.html', controller: 'noticeCtrl', title: 'noticePage'});
        $routeProvider.when('/trends', {templateUrl: urls.part + '/staticpage/trends.html', controller: 'JtrendsCtrl', title: 'trendsPage'});
        $routeProvider.when('/privacypolicy', {templateUrl: urls.part + '/staticpage/privacypolicy.html', controller: 'PrivacyPolicyCtrl', title: 'PrivacyPolicyPage'});
        
        $routeProvider.when('/feedback', {templateUrl: urls.part + '/feedback.html', controller: 'feedbackCtrl', title: 'feedbackPage'});
        
        //manage page
        $routeProvider.when('/projectmanage', {templateUrl: urls.part + '/admin/projectManage.html', controller: 'projectmanageCtrl', title: 'projectmanagePage'});
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