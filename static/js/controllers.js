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
    controller('RegistStartupCtrl', ['$scope', '$cookieStore','$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $cookieStore, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistStartupCtrl');
        $scope.startup = {};
        $scope.flag = false;
        $scope.token = "";
        $scope.captcha_url = urls.api+'/captcha/image/';
        $scope.startup_regist = function(){
            if($scope.startup.password != $scope.startup.repassword){
                console.log("请检查您的输入, 两次输入密码不同");
                $scope.error =  $csrf.format_error("请检查您的输入, 两次输入密码不同");
                return;
            }
            $csrf.set_csrf($scope.startup);
            $http.post(urls.api+'/account/register/', JSON.stringify($scope.startup)).success(function(data){
                alert("注册成功，请登陆");
                window.location.href="/login";
            }).error(function(data,status,headers, config){
                if (data.email){
                    $scope.error =  $csrf.format_error(data.email[0]);
                }
                else if (data.detail){
                    $scope.error =  $csrf.format_error(data.detail);
                }
                else if (data.username){
                    $scope.error =  $csrf.format_error("该用户名已经被注册");
                }
                else if (data){
                    $scope.error =  $csrf.format_error(data);
                }
                console.log(data);
            });
        };
        // $scope.putuserinfo=function(){
        //     $scope.login_info={
        //         username: $scope.startup.username,
        //         password: $scope.startup.password
        //     };
        //     $csrf.set_csrf($scope.login_info);
        //     $http.post(urls.api+'/account/login/',JSON.stringify($scope.login_info))
        //     .success(function(data){
        //             $cookieStore.put("username",$scope.login_info.username);
        //             $cookieStore.put("token",data.token);
        //             $scope.token = data.token;

        //             //post userinfo
        //             $scope.userinfo = {
        //                 role: "1",
        //                 name: $scope.startup.username,
        //             };
        //             $csrf.set_csrf($scope.userinfo);
        //             console.log($scope.userinfo);
        //             var req = {
        //                  method: 'POST',
        //                  url: urls.api+"/data/userinfo/createorupdate/",
        //                  headers: {
        //                    'Content-Type': 'application/json',
        //                    'Authorization': "Token "+$scope.token
        //                  },
        //                  data: JSON.stringify($scope.userinfo)
        //             }
        //             $http(req).
        //             success(function(_data){
        //                 console.log(_data);
        //                 $cookieStore.put("id",_data.id);
        //                 window.location.href="/regist_startup_finish";
        //             }).
        //             error(function(_data){
        //                 console.log(_data);
        //             });
        //         })
        //         .error(function(data){
        //             console.log(data);
        //             $scope.error = $csrf.format_error(data.non_field_errors[0]);
        //         }); 
        // };
        $scope.refresh=function(){
            $scope.captcha_url = urls.api+'/captcha/image/?'+Math.random();
        };
    }]).
    controller('RegistStartupFinishCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService','$cookieStore', function($scope, $http, $csrf, urls, $filter, $routeParams, $user, $cookieStore){
        console.log('RegistStartupFinishCtrl');
    }]).
    controller('RegistInvestAuthCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestAuthCtrl');
    }]).
    controller('RegistInvestInfoCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestInfoCtrl');
        $scope.captcha_url = urls.api+'/captcha/image/';
        $scope.refresh=function(){
            $scope.captcha_url = urls.api+'/captcha/image/?'+Math.random();
        };
    }]).
    controller('RegistInvestFinishCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('RegistInvestFinishCtrl');
    }]).
    controller('LoginCtrl', ['$scope','$cookieStore', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $cookieStore, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('LoginCtrl');
        $scope.login_info = {};
        $scope.captcha_url = urls.api+'/captcha/image/';
        $scope.refresh=function(){
            $scope.captcha_url = urls.api+'/captcha/image/?'+Math.random();
        };
        $scope.login_user = function(){
            $csrf.set_csrf($scope.login_info);
            $http.post(urls.api+'/account/login/',JSON.stringify($scope.login_info))
                .success(function(data){
                    $cookieStore.put("username",$scope.login_info.username);
                    $cookieStore.put("token",data.token);
                    alert("登陆成功！");
                    window.location.href="/";
                })
                .error(function(data){
                    console.log(data);
                    $scope.error = $csrf.format_error(data.non_field_errors[0]);
                }); 
        };
    }]).
    controller('internshipCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('internshipCtrl');
        
    }]).
    controller('FinancingCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('FinancingCtrl');
        $scope.myInterval = 50000;
        $scope.slides = [
            {image: "/static/img/project/projectbanbg.jpg",title:"什么是关注项目？",detail:"创+会把您关注的项目放到个人页面您关注的项目内，这样您就可以持续获得您关注的项目的最新信息。"},
            {image: "/static/img/project/projectbanbg.jpg",title:"什么是邀请路演？",detail:"创+每周都会举行线上路演，你可以邀请感兴趣的项目进行线下路演，与您面对面交流，，我们每两周会选取获得邀请数最多的项目，进行线下路演。"},
            {image: "/static/img/project/projectbanbg.jpg",title:"什么是直接联系？",detail:"线上路演的过程中，如果您对某个项目非常感兴趣，则可以选择直接联系，创+会在48小时内受理，联系团队与投资人直接对接。"}
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
        // $scope.getproject
        $scope.projects =[
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
        $scope.user=$cookieStore.get("username");
        //console.log("user"+$scope.user);
        $scope.login = false;
        if ($scope.user==undefined){
             $scope.login = false;
         }
         else{
            $scope.login = true; 
         }
         $scope.logout=function(){
            $cookieStore.remove("username");
            $cookieStore.remove("id");
            $cookieStore.remove("token");
            window.location.href="/";
         };
    }]).
    controller('createproject', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService','$cookieStore', 'Upload',function($scope, $http, $csrf, urls, $filter, $routeParams, $user, $cookieStore, Upload){
        console.log('createproject');
        $scope.username=$cookieStore.get("username");

        $scope.upload_img = function(file,picname){
            if (file!=null) {
                var file_current = file[0];
                var param = {
                    'name': picname
                };
                $csrf.set_csrf(param);
                // Upload.http({
                //     url: urls.api+'/imagefile',
                //     headers : {
                //         'Content-Type': file_current.type,
                //         'X-CSRFToken': $csrf.val()
                //     },
                //     data: file_current
                // }).
                Upload.upload({
                    url: urls.api+'/imagefile',
                    method: 'POST',
                    fields: param,
                    file: file_current
                }).
                success(function(data){
                    console.log(data);
                }).error(function(data){
                    console.log(data);
                });
            }
        };
        $scope.$watch("apply_info.logo",function(){
            $scope.upload_img($scope.apply_info.logo,"logo");
            console.log($scope.apply_info.logo);
        });
        $scope.apply_info = {};
        $scope.apply_info.field1 = "";
        $scope.field = [];
        $scope.fieldCount = 0;
        $scope.tabindex = 1;
        $scope.view_tab = "tab"+$scope.tabindex;
        $scope.checkboxNum = function(){
            $scope.fieldCount=0;
            $scope.field = [];
            if ($scope.apply_info.area==undefined){
                return;
            }
            else{
                for (var i in $scope.apply_info.area){
                if ($scope.apply_info.area[i]){
                    $scope.fieldCount++;
                    $scope.field.push(i);
                }
            }
            }
        }
        $scope.tabnext=function(){
            switch($scope.tabindex)
            {
                case 1:
                if ($scope.basicInfoForm.$valid){
                    $scope.checkboxNum();
                    console.log($scope.field);
                    if ($scope.fieldCount == 0 || $scope.fieldCount>3) {
                        $scope.error = $csrf.format_error("项目领域个数需在1个到三个之间");
                        return;
                    }
                    else if ($scope.apply_info.type == undefined){
                        $scope.error = $csrf.format_error("请选择项目类型");
                    }
                    else if($scope.apply_info.stage == undefined){
                        $scope.error = $csrf.format_error("请选择融资情况");
                    }
                    else if ($scope.apply_info.logo==undefined){
                        $scope.error = $csrf.format_error("请上传项目logo");
                    }
                    else{
                        $scope.apply_info.field1 = $scope.field[0];
                        if ($scope.field[1]!=undefined) {
                            $scope.apply_info.field1=$scope.apply_info.field1+";"+$scope.field[1];
                        }
                        if ($scope.field[2]!=undefined) { 
                            $scope.apply_info.field1=$scope.apply_info.field1+";"+$scope.field[2];
                        }              
                        $scope.tabindex = $scope.tabindex+1;
                        $scope.view_tab = "tab" + $scope.tabindex;
                        $csrf.remove_error();
                        console.log($scope.apply_info.field1);
                    }
                }
                else{
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                break;
                case 2:
                if($scope.contactInfoForm.$invalid && $scope.contactInfoForm.phoneNumber.$valid && $scope.contactInfoForm.email.$valid){
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                else if ($scope.contactInfoForm.phoneNumber.$invalid){
                    $scope.error = $csrf.format_error("手机号请填写数字");
                } 
                else if ($scope.contactInfoForm.email.$invalid){
                    $scope.error = $csrf.format_error("请输入正确的邮箱地址");
                }
                else if($scope.contactInfoForm.$valid){
                    $scope.tabindex = $scope.tabindex+1;
                    $scope.view_tab = "tab" + $scope.tabindex;
                    $csrf.remove_error();
                }
                break;
                case 3:
                if($scope.groupMemberForm.$invalid){
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                else{
                    $scope.tabindex = $scope.tabindex+1;
                    $scope.view_tab = "tab" + $scope.tabindex;
                    $csrf.remove_error();
                }
                // for (var i =$scope.apply_info.member_list.length - 1; i >= 0; i--) {
                //     console.log($scope.apply_info.member_list[i]);
                // }
                break;

                case 4:
                if($scope.imageTextForm.$invalid ){
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                else{
                    $scope.tabindex = $scope.tabindex+1;
                    $scope.view_tab = "tab" + $scope.tabindex;
                    $csrf.remove_error();
                }
                break;

                case 5:
                if($scope.planningForm.$invalid){
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                else{
                    $scope.tabindex = $scope.tabindex+1;
                    $scope.view_tab = "tab" + $scope.tabindex;
                    $csrf.remove_error();
                }
                break;

                case 6:
                if($scope.chronicleForm.$invalid ){
                    $scope.error = $csrf.format_error("请检查您填写的内容是否漏填");
                }
                else{
                    $scope.tabindex = $scope.tabindex+1;
                    $scope.view_tab = "tab" + $scope.tabindex;
                    $csrf.remove_error();
                }
                break;
            }
        }
        $scope.tabprior=function(){
            $scope.tabindex = $scope.tabindex-1;
            $scope.view_tab = "tab" + $scope.tabindex;
        }
        
        // 处理第三步
        $scope.apply_info.member_list = [];
        $scope.add_member = function(){
            $scope.apply_info.member_list.push({});
        };
        $scope.del_member = function(member_index){
            $scope.apply_info.member_list.splice(member_index, 1);
        };
        // 处理第四步
        // 处理第六步
        $scope.apply_info.event_list = [];
        $scope.add_event = function(){
            $scope.apply_info.event_list.push({});
        };
        $scope.del_event = function(event_index){
            $scope.apply_info.event_list.splice(event_index, 1);
        };
        $scope.create_project=function(){
           $csrf.set_csrf($scope.apply_info);
           console.log($scope.apply_info);
           $http.post(urls.api+'/data/project/',JSON.stringify($scope.apply_info)).
            success(function(data){
                $scope.upload_img($scope.apply_info.logo);
                $scope.upload_img($scope.apply_info.description);
                $scope.upload_img($scope.apply_info.qrcode);

                console.log(data);
                //上传团队成员信息
                for(var i = 0; i < $scope.apply_info.member_list.length;i++){
                    $scope.apply_info.member_list[i].pro_id = data.id;
                    $csrf.set_csrf($scope.apply_info.member_list[i]);
                    $http.post(urls.api+'/data/member/',JSON.stringify($scope.apply_info.member_list[i])).
                    success(function(memberdata){
                        console.log("memberdata"+memberdata);
                    }).
                    error(function(memberdata){
                        console.log("memberdata"+memberdata);
                    });
                }
                //上传大事记信息
                for(var i = 0; i < $scope.apply_info.event_list.length;i++){
                    $scope.apply_info.event_list[i].pro_id = data.id;
                    $csrf.set_csrf($scope.apply_info.event_list[i]);
                    $http.post(urls.api+'/data/post/',JSON.stringify($scope.apply_info.event_list[i])).
                    success(function(eventdata){
                        console.log("eventdata"+eventdata);
                    }).
                    error(function(eventdata){
                        console.log("eventdata"+eventdata);
                    });
                }
                
                //联系上传
                $scope.relation = {
                    username: $cookieStore.get('username'),
                    pro_id: data.id,
                    date: data.date,
                    type: 0
                };
                $csrf.set_csrf($scope.relation);
                $http.post(urls.api+'/data/relation/',JSON.stringify($scope.relation)).
                success(function(relationdata){
                    console.log(relationdata);
                }).
                error(function(relationdata){
                    console.log(relationdata);
                });

                window.location.href="/user/myproject";
           }).
           error(function(data){
                console.log(data);
           });
        };
    }]).
    controller('AboutCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('AboutCtrl');
    }]).
    controller('projectdetailRoadshowCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailRoadshowCtrl');
        $scope.type={
            game:"游戏",
            social:"社交",
            ebusiness:"电子商务",
            media:"媒体",
            education:"教育",
            health:"健康医疗",
            mobileInternet:"互联网",
            tools:"工具",
            stationAgentTools:"站长工具",
            entrepreneurServices:"创业服务",
            marketingCampaign:"营销广告",
            enterpriseService:"企业服务",
            financial:"金融",
            travel:"旅游",
            hardware:"硬件",
            PE:"体育",
            videoEntertainment:"视频娱乐",
            search:"搜索安全",
            livingConsumption:"生活消费",
            culture:"文化艺术",
            housingAuto:"房产汽车",
            energyMaterials:"能源材料",
            others:"其他",
        }
        $scope.pro_id = $routeParams.pro_id;
        $scope.projectdetail = {};
        $scope.projectdetail = {
            name:"我是一个项目",
            philosophy:"我的目标是没有蛀牙，我的目标是没有蛀牙，我的目标是没有蛀牙",
            tags: "游戏 社交 虚拟现实",
            financing: "天使轮"
        };
        
        $scope.getproject=function(){
            $http.get(urls.api+'/data/project/'+$scope.pro_id+"/").
                success(function(data){
                    $scope.projectdetail = data;
                    $scope.projectdetail.field1  = $scope.projectdetail.field1.split(";");
                    console.log($scope.projectdetail.field1);
                }).
                error(function(data){
                    console.log(data);
                });
        }
        $scope.getproject();
    }]).
    controller('projectdetailTextCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailTextCtrl');
        $scope.type={
            game:"游戏",
            social:"社交",
            ebusiness:"电子商务",
            media:"媒体",
            education:"教育",
            health:"健康医疗",
            mobileInternet:"互联网",
            tools:"工具",
            stationAgentTools:"站长工具",
            entrepreneurServices:"创业服务",
            marketingCampaign:"营销广告",
            enterpriseService:"企业服务",
            financial:"金融",
            travel:"旅游",
            hardware:"硬件",
            PE:"体育",
            videoEntertainment:"视频娱乐",
            search:"搜索安全",
            livingConsumption:"生活消费",
            culture:"文化艺术",
            housingAuto:"房产汽车",
            energyMaterials:"能源材料",
            others:"其他",
        }
        $scope.pro_id = $routeParams.pro_id;
        $scope.projectdetail = {};
        $scope.getproject=function(){
            $http.get(urls.api+'/data/project/'+$scope.pro_id+"/").
                success(function(data){
                    $scope.projectdetail = data;
                    $scope.projectdetail.field1  = $scope.projectdetail.field1.split(";");
                    console.log($scope.projectdetail.field1);
                    console.log(data);
                }).
                error(function(data){
                    console.log(data);
                });
        }
        $scope.getproject();
        $scope.getTeam=function(){
            $http.get(urls.api+'/data/Member/'+$scope.pro_id+"/").
                success(function(data){
                    $scope.projectdetail = data;
                }).
                error(function(data){
                    console.log(data);
                });
        };
        $scope.controlinfo = "teaminfo";
        $scope.tab1 = true;
        $scope.tab = true;
        $scope.teaminfo = function(){
            $scope.controlinfo = "teaminfo";
            $scope.tab1 = true;
            $scope.tab2=$scope.tab3=$scope.tab4=$scope.tab5=false;
        };
        $scope.productinfo = function(){
            $scope.controlinfo = "productinfo";
            $scope.tab2 = true;
            $scope.tab1=$scope.tab3=$scope.tab4=$scope.tab5=false;
        };
        $scope.industryanalysis = function(){
            $scope.controlinfo = "industryanalysis";
            $scope.tab3 = true;
            $scope.tab1=$scope.tab2=$scope.tab4=$scope.tab5=false;
        };
        $scope.futureplan = function(){
            $scope.controlinfo = "futureplan";
            $scope.tab4 = true;
            $scope.tab1=$scope.tab2=$scope.tab3=$scope.tab5=false;
        };
        $scope.breaknews = function(){
            $scope.controlinfo = "breaknews";
            $scope.tab5 = true;
            $scope.tab1=$scope.tab2=$scope.tab3=$scope.tab4=false;
        };
        // $scope.projectdetail = {
        //     name:"我是一个项目而且这是我的名字",
        //     philosophy:"我的目标是没有蛀牙，我的目标是没有蛀牙，我的目标是没有蛀牙",
        //     tags:[
        //             {name:"游戏",tag:"yx"},
        //             {name:"社交",tag:"sj"},
        //             {name:"虚拟现实",tag:"xnxs"},
        //     ],
        //     financing: "天使轮",
        //     guanzhu:"888",
        //     link:"http://www.woyaomaishuiguo.com",
        //     overview:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     teammembers:[
        //                     {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CEO",introduction:"ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
        //                     {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CTO",introduction:"ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
        //                     {image:"/static/img/projectdetail/WZR.png",name:"王自如",position:"CMO",introduction:"ZEALER（载乐网络科技）创始人 ，1988年生于齐齐哈尔，毕业于西安翻译学院，后就读于香港理工大学。王自如从2009年开始做数码产品的开箱视频，而之后拓展到科技评论，迄今已完成近300个，现在每个视频的访问量在15万以上。如今他辞掉干了三年的工作，开始一门心思建立自己的科技媒体，且已拿到雷军名下的顺为创投基金的第一笔投资。"},
        //     ],
        //     introduction:"/static/img/projectdetail/introduction.png",
        //     code2D:"/static/img/projectdetail/2Dcode.png",
        //     relatedlinks:[
        //                     {name:"http://www.woyaomaishuiguo.com"},
        //                     {name:"http://www.woyaomaishuiguo.com"},
        //                     {name:"http://www.woyaomaishuiguo.com"},
        //     ],
        //     marketanalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     competitoranalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     consumeranalysis:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     businessmodel:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     futureplan:"一个开放的O2O服务整合平台，上游整合美团、团购、打车、酒店机票、家政服务等O2O服务，打通账号，统一订单管理。下游跟联想、酷派、中兴、金立、天语等一线手机厂商合作，集成到系统，让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。为这些超级APP的流量找到除游戏、广告之外的第三个变现出口。现在总用户超过一千万，在总用户超过一千万刚完成A轮1000万美金融资。让用户买到手机就买到O2O服务，同时还开放SDK给如高德地图、凤凰新闻、有信这样的超级APP。",
        //     breaknews:[
        //                 {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
        //                 {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
        //                 {date:"2015.1.1",content:"一个重大的事件发生。",link:"http://www.woyaomaishuiguo.com"},
        //     ],
        // };
        
    }]).
    controller('projectdetailJoinusCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('projectdetailJoinusCtrl');
    }]).
    controller('libraryCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('libraryCtrl');
        $scope.filters = $routeParams.filters;
        $scope.type={
            game:"游戏",
            social:"社交",
            ebusiness:"电子商务",
            media:"媒体",
            education:"教育",
            health:"健康医疗",
            mobileInternet:"互联网",
            tools:"工具",
            stationAgentTools:"站长工具",
            entrepreneurServices:"创业服务",
            marketingCampaign:"营销广告",
            enterpriseService:"企业服务",
            financial:"金融",
            travel:"旅游",
            hardware:"硬件",
            PE:"体育",
            videoEntertainment:"视频娱乐",
            search:"搜索安全",
            livingConsumption:"生活消费",
            culture:"文化艺术",
            housingAuto:"房产汽车",
            energyMaterials:"能源材料",
            others:"其他",
        };

        $scope.menus={
            领域:"field",
            地区:"province",
            类型:"type",
            阶段:"stage",
            推荐:"recommend"
        };
         $scope.branches = [
            {
                name:"领域",
                types:[
                        {name:"游戏",tag:"game"},
                        {name:"社交",tag:"social"},
                        {name:"电子商务",tag:"ebusiness"},
                        {name:"媒体",tag:"media"},
                        {name:"教育",tag:"education"},
                        {name:"健康医疗",tag:"health"},
                        {name:"互联网",tag:"mobileInternet"},
                        {name:"工具",tag:"tools"},
                        {name:"站长工具",tag:"stationAgentTools"},
                        {name:"创业服务",tag:"entrepreneurServices"},
                        {name:"营销广告",tag:"marketingCampaign"},
                        {name:"企业服务",tag:"enterpriseService"},
                        {name:"金融",tag:"financial"},
                        {name:"旅游",tag:"travel"},
                        {name:"硬件",tag:"hardware"},
                        {name:"体育",tag:"PE"},
                        {name:"视频娱乐",tag:"videoEntertainment"},
                        {name:"搜索安全",tag:"search"},
                        {name:"生活消费",tag:"livingConsumption"},
                        {name:"文化艺术",tag:"culture"},
                        {name:"房产汽车",tag:"housingAuto"},
                        {name:"能源材料",tag:"energyMaterials"},
                        {name:"其他",tag:"others"},
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
        $scope.projectlist = [];
        $scope.area=[];
        $scope.nextpage = "";
        $scope.previouspage = "";
        $scope.getproject=function(){
            $http.get(urls.api+'/data/project/.json?filter={}').
                success(function(data){
                    $scope.projectlist = data.results;
                    $scope.nextpage = data.next;
                    $scope.previouspage = data.previous;
                    for(var x in $scope.projectlist){
                       $scope.projectlist[x].field1  = $scope.projectlist[x].field1.split(";");
                    }
                    console.log($scope.projectlist);
                }).
                error(function(data){
                    console.log(data);
                });
            
        }
        $scope.getproject();
        // $scope.projects=[
        // {
        //     image:"/static/img/index/inacup_pumpkin.jpg",
        //     projectName:"我是一个项目",
        //     CEO:"我是CEO",
        //     financing:"A轮",
        //     detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
        //     tags:"游戏 社交 虚拟现实",
        //     isRoadshow:"yes"
        // },
        // {
        //     image:"/static/img/index/inacup_pumpkin.jpg",
        //     projectName:"我是一个项目",
        //     CEO:"我是CEO",
        //     financing:"A轮",
        //     detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
        //     tags:"游戏 社交 虚拟现实",
        //     isRoadshow:"yes"
        // },
        // {
        //     image:"/static/img/index/inacup_pumpkin.jpg",
        //     projectName:"我是一个项目",
        //     CEO:"我是CEO",
        //     financing:"A轮",
        //     detail:"wo shi yige xiang mu fdsajfldsafjlkdjfladsjf;ladjfla;dsjfaldjfajdsflajdfajdfjadsfkasjfkdajsfl;a",
        //     tags:"游戏 社交 虚拟现实",
        //     isRoadshow:"yes"
        // }
        // ];
    }]).
    controller('MyprojectCtrl', ['$scope', '$cookieStore','$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope,$cookieStore, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('MyprojectCtrl');
        $scope.view_tab = 'tab1';
        
        $scope.changeTab = function(tab) {
            $scope.view_tab = tab;
        };
        $scope.createproject=function(){
            window.location.href="/createproject";
        };
        $scope.financing=function(){
            window.location.href="/financingprocess";
        };
    }]).  
    controller('UserinfoCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('UserinfoCtrl');
        $scope.view_tab = 'tab1';
        $scope.changeTab = function(tab) {
            $scope.view_tab = tab;
        };
    }]).    
    controller('FinancingProcessCtrl', ['$scope', '$http', 'CsrfService', 'urls', '$filter', '$routeParams', 'UserService', function($scope, $http, $csrf, urls, $filter, $routeParams, $user){
        console.log('FinancingProcessCtrl');
        
    }])
