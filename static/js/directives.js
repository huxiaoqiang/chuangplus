'use strict';

/* Directives */


angular.module('chuangplus.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).
    directive('userNav', ['urls', '$location', function(urls, $location){
        return {
            restrict: 'E',
            scope: {
                page: '=page'
            },
            controller: function($scope){
                $scope.pages_tab = {
                    'userinfo': {
                        'text': '个人信息管理',
                        'active': false,
                        'url': '/user/maintain_info'
                    },
                    'item': {
                        'text': '基地、计划、项目、导师管理',
                        'active': false,
                        'url': '/item/create'
                    },
                    'message': {
                        'text': '站内消息',
                        'active': false,
                        'url': '/user/message'
                    },
                    'ability': {
                        'text': '个人能力点',
                        'active': false,
                        'url': '/user/point'
                    }
                };
                $scope.pages_tab[$scope.page].active = true;
                $scope.url = function(url){
                    $location.url(url);
                };
            },
            templateUrl: urls.part + '/manager_nav.html'
        };
    }]).
    directive('errorMessage', ['urls', function(urls){
        return {
            restrict: 'E',
            scope: {
                error: '=error'
            },
            controller: function($scope){
//                console.log($scope.error);
            },
            templateUrl: urls.part + '/error_message.html'
        };
    }]).    
    directive('ngThumb', ['$window', function($window) {
        var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'A',
            template: '<canvas/>',
            link: function(scope, element, attributes) {
                if (!helper.support) return;

                var params = scope.$eval(attributes.ngThumb);

                if (!helper.isFile(params.file)) return;
                if (!helper.isImage(params.file)) return;

                var canvas = element.find('canvas');
                var reader = new FileReader();

                reader.onload = onLoadFile;
                reader.readAsDataURL(params.file);

                function onLoadFile(event) {
                    var img = new Image();
                    img.onload = onLoadImage;
                    img.src = event.target.result;
                }

                function onLoadImage() {
                    var width = params.width || this.width / this.height * params.height;
                    var height = params.height || this.height / this.width * params.width;
                    canvas.attr({ width: width, height: height });
                    canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                }
            }
        };
    }]);
