'use strict';

/* Controllers */

angular.module('chuangplus.controllers', []).
    controller('HomepageCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('HomepageCtrl');
        $scope.myInterval = 3000;
        $scope.slides = [
        {image: "/static/img/index/banner1.jpg"},
        {image: "/static/img/index/banner2.jpg"},
        {image: "/static/img/index/banner3.jpg"}
      ];
    }]).
    controller('Homepage_InvCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('Homepage_InvCtrl');
        $scope.myInterval = 3000;
        $scope.slides = [
        {image: "/static/img/index/banner1.jpg"},
        {image: "/static/img/index/banner2.jpg"},
        {image: "/static/img/index/banner3.jpg"}
      ];
        $scope.roadshow = [
        {image: "/static/img/index/bannerslide.jpg"},
        {image: "/static/img/index/bannerslide1.jpg"},
        {image: "/static/img/index/bannerslide2.jpg"}
      ];
    }]).
    controller('LoginCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('LoginCtrl');
        $scope.login_info = {};
        $scope.login_user = function(){
            $csrf.set_csrf($scope.login_info);
            $http.post('/account/login', JSON.stringify($scope.login_info)).success(function(data){
                console.log(data);
            //     if(data.error.code != 1){
            //         $scope.error = $csrf.format_error(data.error);
            //     }else{
            //         if ($user.isFromProject()){
            //             window.location.href="/project_apply";
            //          }
            //         else{
            //             window.location.href="/";
            //         }
            //     }
            });
        };
    }]).
    controller('RegistStartupCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistStartupCtrl');
        $scope.startup = {};
        $scope.captcha_url = urls.api+'/captcha/image/';
        $scope.startup_regist = function(){
            if($scope.startup.password != $scope.startup.repassword){
                console.log("请检查您的输入, 两次输入密码不同");
                //$zmodal.alert('请检查您的输入', '两次输入密码不同');
                return;
            }
            $csrf.set_csrf($scope.startup);
            $http.post(urls.api+'/account/register/', JSON.stringify($scope.startup)).success(function(data){
                window.location.href="/regist_startup_finish";
            }).error(function(data,status,headers, config){
                console.log(data);
                alert('failure');
            });
        };
        $scope.refresh=function(){
            $scope.captcha_url = urls.api+'/captcha/image/?'+Math.random();
        };
    }]).
    controller('RegistStartupFinishCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistStartupFinishCtrl');

    }]).
    controller('RegistInvestAuthCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestAuthCtrl');
    }]).
    controller('RegistInvestAuthCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestAuthCtrl');
    }]).
    controller('RegistInvestAuthCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestAuthCtrl');
    }]).
    controller('LoginCtrl', ['$scope','$cookieStore', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $cookieStore, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('LoginCtrl');
        $scope.login_info = {};
        $scope.login_user = function(){
            $csrf.set_csrf($scope.login_info);
            $http.post(urls.api+'/account/login/',JSON.stringify($scope.login_info))
                .success(function(data){
                    $cookieStore.put("user",$scope.login_info.username);
                    window.location.href="/";
                })
                .error(function(data){
                    console.log(data);
                }); 
        };
    }]).
    controller('RegistInvestInfoCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestInfoCtrl');
        $scope.captcha_url = urls.api+'/captcha/image/';
        $scope.refresh=function(){
            $scope.captcha_url = urls.api+'/captcha/image/?'+Math.random();
        };
    }]).
    controller('internshipCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('internshipCtrl');
        
    }]).
    controller('FinancingCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('FinancingCtrl');
        $scope.myInterval = 3000;
        $scope.slides = [
        {image: "/static/img/project/0.jpg",title:"什么是关注项目？",detail:"创+会把您关注的项目放到个人页面您关注的项目内，这样您就可以持续获得您关注的项目的最新信息。"},
        {image: "/static/img/project/1.jpg",title:"什么是邀请路演？",detail:"创+每周都会举行线上路演，你可以邀请感兴趣的项目进行线下路演，与您面对面交流，，我们每两周会选取获得邀请数最多的项目，进行线下路演。"},
        {image: "/static/img/project/2.jpg",title:"什么是直接联系？",detail:"线上路演的过程中，如果您对某个项目非常感兴趣，则可以选择直接联系，创+会在48小时内受理，联系团队与投资人直接对接。"}
        ];
        $scope.branches = [
            {
                name:"领域",
                types:[
                        {name:"游戏",tag:"yx"},
                        {name:"社交",tag:"sj"},
                        {name:"互联网",tag:"hlw"},
                        {name:"人才招聘",tag:"rczp"},
                        {name:"健康医疗",tag:"jkyl"},
                        {name:"媒体",tag:"mt"},
                        {name:"教育",tag:"jy"},
                        {name:"物联网",tag:"wlw"},
                        {name:"企业服务",tag:"qyfw"},
                        {name:"营销推广",tag:"yxtg"},
                        {name:"金融",tag:"jr"},
                        {name:"旅游",tag:"ly"},
                        {name:"宠物",tag:"cw"},
                        {name:"硬件",tag:"yj"},
                        {name:"体育",tag:"ty"},
                        {name:"视频娱乐",tag:"spyl"},
                        {name:"搜索安全",tag:"ssaq"},
                        {name:"生活消费",tag:"shxf"},
                        {name:"文化艺术",tag:"whys"},
                    ]
            },
            
            {
                name:"地区",
                types:[
                    {name:"北京",tag:"bj"},
                    {name:"上海",tag:"sh"},
                    {name:"无锡",tag:"wx"},
                    {name:"昆山",tag:"ks"},
                    {name:"厦门",tag:"xm"},
                    {name:"海外",tag:"overseas"},
                ]
            },
            {
                name:"类型",
                types:[
                    {name:"互联网产品",tag:"1"},
                    {name:"互联网服务",tag:"2"},
                    {name:"实体产品",tag:"3"},
                    {name:"线下服务",tag:"4"},
                    {name:"O2O",tag:"5"},
                    {name:"其他",tag:"6"},
                ]
            },
            {
                name:"阶段",
                types:[
                    {name:"天使轮",tag:"1"},
                    {name:"A轮",tag:"2"},
                    {name:"B轮",tag:"3"},
                    {name:"C轮",tag:"4"},
                    {name:"D轮",tag:"5"},
                    {name:"上市",tag:"6"},
                ]
            },
            {
                name:"推荐",
                types:[
                    {name:"精选推荐",tag:"selected"},
                    {name:"全体项目",tag:"all"},
                ]
            }
        ];
        $scope.projects=[
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        },
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        },
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        }
        ];
    }]).
    controller('UserCtrl', ['$scope', '$cookieStore','$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope,$cookieStore,$http, $csrf, urls, $filter, $routeParams, $user){
        console.log('UserCtrl');
        $scope.user = $cookieStore.get("user");
        console.log("user"+$scope.user);
        $scope.login = false;
        if ($scope.user==undefined){
             $scope.login = false;
         }
         else{
            $scope.login = true; 
         }
         $scope.logout=function(){
            $cookieStore.remove("user");
            window.location.href="/";
         };
    }]).
    controller('createproject', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('createproject');
        $scope.tabindex = 1;
        $scope.view_tab = "tab"+$scope.tabindex;
        $scope.tabnext=function(){
            $scope.tabindex = $scope.tabindex+1;
            $scope.view_tab = "tab" + $scope.tabindex;
        };
        $scope.tabprior=function(){
            $scope.tabindex = $scope.tabindex-1;
            $scope.view_tab = "tab" + $scope.tabindex;
        };
    }]).
    controller('Step1Ctrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService','FileUploader', function($scope, $http, $csrf, urls, $filter, $routeParams, $user,FileUploader){
        console.log('Step1Ctrl');
        $scope.uploader = new FileUploader();
        $scope.$watch('apply_info',function(newValue, oldValue){
            console.log(oldValue);
            console.log(newValue);
        });
    }]).
    controller('Step3Ctrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService','FileUploader', function($scope, $http, $csrf, urls, $filter, $routeParams, $user,FileUploader){
        console.log('Step3Ctrl');
        $scope.AvatarUploader = [];
         // = new FileUploader();
        $scope.member_list = [];
        $scope.add_member = function(){
            $scope.member_list.push({});
                if ($scope.member_list.length==0){
            $scope.submit = false;
            }
            else{
                $scope.submit = true;
            }
        };
        $scope.del_member = function(member_index){
            $scope.member_list.splice(member_index, 1);
                                if ($scope.member_list.length==0) {
            $scope.submit = false;
            }
            else{
                $scope.submit = true;
            }
        };
    }]).
    controller('Step6Ctrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService','FileUploader', function($scope, $http, $csrf, urls, $filter, $routeParams, $user,FileUploader){
        console.log('Step6Ctrl');
        // $scope.uploader = new FileUploader();
        $scope.event_list = [];
        $scope.add_event = function(){
            $scope.event_list.push({});
        };
        $scope.del_member = function(member_index){
            $scope.member_list.splice(member_index, 1);
        };
    }]).
    controller('AboutCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('AboutCtrl');
    }]).
    controller('projectdetailRoadshowCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailRoadshowCtrl');
        $scope.projectdetail = {
            name:"我是一个项目",
            philosophy:"我的目标是没有蛀牙，我的目标是没有蛀牙，我的目标是没有蛀牙",
            tags: "游戏 社交 虚拟现实",
            financing: "天使轮"
        };
    }]).
    controller('projectdetailTextCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailTextCtrl');
        $scope.projectdetail = {
            name:"我是一个项目而且这是我的名字",
            philosophy:"我的目标是没有蛀牙，我的目标是没有蛀牙，我的目标是没有蛀牙",
            tags:[
                    {name:"游戏",tag:"yx"},
                    {name:"社交",tag:"sj"},
                    {name:"虚拟现实",tag:"xnxs"},
            ],
            financing: "天使轮",
            guanzhu:"888",
            link:"http://www.woyaomaishuiguo.com",
            overview:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            teammembers:[
                            {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CEO",introduction:"王自如，ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
                            {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CTO",introduction:"王自如，ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
                            {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CMO",introduction:"王自如，ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
            ],
            introduction:"/static/img/projectdetail/introduction.png",
            code2D:"/static/img/projectdetail/2Dcode.png",
            marketanalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            competitoranalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            consumeranalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            businessmodel:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            futureplan:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
            breaknews:[
                        {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
                        {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
                        {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
            ],
        };
    }]).
    controller('projectdetailJoinusCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailJoinusCtrl');
    }]).
    controller('libraryCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('libraryCtrl');
         $scope.branches = [
            {
                name:"领域",
                types:[
                        {name:"游戏",tag:"yx"},
                        {name:"社交",tag:"sj"},
                        {name:"互联网",tag:"hlw"},
                        {name:"人才招聘",tag:"rczp"},
                        {name:"健康医疗",tag:"jkyl"},
                        {name:"媒体",tag:"mt"},
                        {name:"教育",tag:"jy"},
                        {name:"物联网",tag:"wlw"},
                        {name:"企业服务",tag:"qyfw"},
                        {name:"营销推广",tag:"yxtg"},
                        {name:"金融",tag:"jr"},
                        {name:"旅游",tag:"ly"},
                        {name:"宠物",tag:"cw"},
                        {name:"硬件",tag:"yj"},
                        {name:"体育",tag:"ty"},
                        {name:"视频娱乐",tag:"spyl"},
                        {name:"搜索安全",tag:"ssaq"},
                        {name:"生活消费",tag:"shxf"},
                        {name:"文化艺术",tag:"whys"},
                    ]
            },
            {
                name:"地区",
                types:[
                    {name:"北京",tag:"bj"},
                    {name:"上海",tag:"sh"},
                    {name:"无锡",tag:"wx"},
                    {name:"昆山",tag:"ks"},
                    {name:"厦门",tag:"xm"},
                    {name:"海外",tag:"overseas"},
                ]
            },
            {
                name:"类型",
                types:[
                    {name:"互联网产品",tag:"1"},
                    {name:"互联网服务",tag:"2"},
                    {name:"实体产品",tag:"3"},
                    {name:"线下服务",tag:"4"},
                    {name:"O2O",tag:"5"},
                    {name:"其他",tag:"6"},
                ]
            },
            {
                name:"阶段",
                types:[
                    {name:"天使轮",tag:"1"},
                    {name:"A轮",tag:"2"},
                    {name:"B轮",tag:"3"},
                    {name:"C轮",tag:"4"},
                    {name:"D轮",tag:"5"},
                    {name:"上市",tag:"6"},
                ]
            },
            {
                name:"推荐",
                types:[
                    {name:"精选推荐",tag:"selected"},
                    {name:"全体项目",tag:"all"},
                ]
            }
        ];
        $scope.projects=[
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        },
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        },
        {
            image:"/static/img/index/inacup_pumpkin.jpg",
            projectName:"我是一个项目",
            CEO:"我是CEO",
            financing:"A轮",
            detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
            tags:"游戏 社交 虚拟现实",
            isRoadshow:"yes"
        }
        ];
    }]).   
    controller('MyprojectCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('MyprojectCtrl');
        $scope.view_tab = 'tab1';
        $scope.changeTab = function(tab) {
            $scope.view_tab = tab;
        };
        $scope.createproject=function(){
            window.location.href="/createproject/step1";
        };
        $scope.financing=function(){
            window.location.href="/financingprocess";
        };
    }]).  
    controller('UserinfoCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('UserinfoCtrl');
        $scope.view_tab = 'tab1';
    }]);

