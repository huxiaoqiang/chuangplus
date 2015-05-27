# 数据库结构
## Account
### Userinfo
用户信息表

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
role        | Integer   | 默认值：1         | 1:创业人; 0:为投资人
name        | Char      | 最大长度：30      |
gender      | Integer   | 默认值：1；可空   | 1:男; 0:女
phone       | Char      | 最大长度：30；可空|
weixin      | Char      | 最大长度：30；可空| 微信
province    | Char      | 最大长度：30；可空|
field       | Char      | 最大长度：90；可空| 感兴趣领域
company     | Char      | 最大长度：30；可空| 公司
title       | Char      | 最大长度：30；可空| 职位
introduction| Text      | 可空              | 自我描述
user        | OneToOne  | 关联数据：User    | 对应的User

## Project
### Project
项目表

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
name        | Char      | 最大长度：30      |
field       | Integer   | 最大长度：90      | 所属领域
type        | Char      | 最大长度：30      | 类型
slogan      | Char      | 最大长度：120     | 
summary     | Text      | 可空              |
province    | Char      | 最大长度：30      | 
stage       | Char      | 最大长度：30      | 
contact_name| Char      | 最大长度：30      | 联系人
contact_phone| Char     | 最大长度：30      | 
contact_email| Email    |                   | 
contact_weixin| Char    | 最大长度：30      | 
link1       | Char      | 最大长度：250；可空| 自我描述
link2       | Char      | 最大长度：250；可空|
link3       | Char      | 最大长度：250；可空|
business_model| Text    | 可空              |
plan        | Text      | 可空              |
market_analysis| Text   | 最大长度：200；可空| 总体市场分析
competitor_analysis| Text| 最大长度：200；可空| 竞争者分析
customer_analysis| Text | 最大长度：200；可空| 消费者分析
is_checked  | Char      | 最大长度：30；默认值："ischecking"|
is_roadshowing| Char    | 最大长度：30；默认值："noroadshow"|
date        | Date      | 默认当前日期      |

### Member
项目成员表

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
project     | ForeignKey| 关联数据：Project | 所属项目
m_name      | Char      | 最大长度：30      | 成员姓名
m_head_path | ForeignKey| 关联数据：Data.ImageFile| 头像文件
m_title     | Char      | 最大长度：30      | 职位
introduction| Text      | 可空              | 自我介绍

### Post
项目大事纪

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
project     | ForeignKey| 关联数据：Project | 所属项目
date        | Date      |                   |
title       | Char      | 最大长度：60      |
content     | Text      | 可空              |
link        | Char      | 最大长度：250     | 相关链接
image_path  | ForeignKey| 关联数据：Data.ImageFile；可空| 相关图片

### Relation
关系表

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
username    | Char      | 最大长度：100     | 相关用户的用户名（非外键）
project     | ForeignKey| 关联数据：Project | 相关项目
date        | Date      |                   |
type        | Integer   | 默认值：0         | 0:用户创建项目; 1:关注; 2:收藏; 3:爆灯

## About
### News
平台新闻

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
date        | Date      |                   |
title       | Char      | 最大长度：60      |
content     | Text      | 可空              |
link        | Char      | 最大长度：250     | 相关链接
image_path  | ForeignKey| 关联数据：Data.ImageFile；可空| 相关图片

### Notice
网站公告

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
date        | Date      |                   |
title       | Char      | 最大长度：60      |
content     | Text      | 可空              |
link        | Char      | 最大长度：250     | 相关链接
image_path  | ForeignKey| 关联数据：Data.ImageFile；可空| 相关图片

## Data
### ImageFile
图片文件

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
image       | Image     | 上传位置："images/"| 图片 url
name        | Char      | 最大长度：200     | 图片名称

### OtherFile
其他文件

字段        | 类型      | 修饰              | 解释
----------- | --------- | ----------------- | --------------
id          | PrimaryKey|                   |
image       | Image     | 上传位置："files/"| 文件 url
name        | Char      | 最大长度：200     | 文件名称

# 接口
## /api/captcha/image/
获得一张 png 格式的验证码图片
## /api/account/register/
注册账户。
向 该url 发送一个 json 格式的 POST 请求来注册。格式：
```javascript
    {
        "username": "someone",              //用户名
        "email": "someone@somewhere.com",   //邮箱
        "password": "secret",               //密码
        "captcha": "FE3c"                   //验证码
    }
```
### 注意
Django 具有 CSRF 机制。所以 POST 的时候，需要在 HTTP 请求添加头 X-CSRFToken ，内容为 cookie 中的 csrftoken。详见
<https://docs.djangoproject.com/en/1.8/ref/csrf/#ajax>
## /api/checkusername/
验证用户名是否可用。
在注册页面，可以通过Ajax来测试用户名是否可用。向该 url 发送一个 json 来检测。发送内容只有一个键 "username"，内容是需要检测的用户名。返回的 json 也只有一个键 "exist"，即用户是否存在。
## /api/account/login/
使用用户名和密码登陆。
后台使用的是 token 登陆模式。向该 url 发送一个 json 格式的 POST 请求来获得 token。格式：
```javascript
    {
        "username": "someone",      //用户名
        "password": "secret"        //密码
    }
```
后台将返回一个 json，只有一个键 token。得到 token 后，遇到需要验证身份的请求，在请求 HTTP 加入头 Authorization。注意键值应该以字符串 "Token" 开头。例如：
```
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```
## /api/data/userinfo/[username]/
获取 username 的用户信息。其中 username 为对应账户的用户名。
## /api/data/userinfo/createorupdate/
创建或更新当前登陆用户的用户信息。
## /api/project/projects/
获取项目列表。
### 后缀
当用 GET 方法访问时，在url后添加后缀可选择返回的格式。例如，如果想返回json格式，可以这样：
```
    /api/data/project/.json
```
### GET参数
#### page_size
每页显示多少条记录。默认为10.
#### page
显示第几页。
#### filter
过滤条件，为一个json。例如，需要找到名字为 somename 并且 所属领域在 somefield 的所有项目，json格式为
```javascript
    {
        "name": "somename",
        "field1": "somefield"
    }
```
压缩到 url 中后的内容为（如果想返回json格式的话）：
```
    http://127.0.0.1/api/data/project/.json?filter={"name":"someone","field1":"somefield"}
```
接口不仅支持相等，还支持多种过滤方法，包括模糊，大小比较等，详细语法可访问 <https://docs.djangoproject.com/en/1.8/ref/models/querysets/#id4> 或问我：）
### 返回值
如果选择json格式，返回值如下：
```javascript
    {
        "count": 32,                    //数据总条数
        "next": null 或者一个 url,      //下一页的 url
        "previous": null 或者一个 url,  //上一页的 url
        "results":                      //结果
        [
            { //第一个结果的 json
                "id": 1,
                "name": "somename1",
                ...
            },
            { //第二个结果的 json
                "id": 2,
                "name": "somename2",
                ...
            },
            ...
        ]
    }
```
### 新建一个 project
如果使用 POST 方法把一个 project 数据以 json 的形式推到这个 url，将会建立一条新数据。如果成功则返回该数据本身，包括 id。
## /api/project/project/[id]/
访问、修改或删除索引为 id 的项目。
### 后缀
同列表一样，当以 GET 方式访问时，在 url 后添加后缀可选择返回格式。
### 修改数据
将修改后的数据以 PUT 的方式（注意不是 POST）推送到该 url，可以更新数据。
### 删除数据
以 DELETE 的方式访问该 url，可以删除该条数据。
## /api/project/projectsfilterbyusername/[username]/[type]/
获得与指定用户有指定关系类型的项目列表。（比如查找用户`abc`创建的所有项目，则`username`为`abc`；`type`为`0`。）
## /api/project/projectsinmyfield/
获得当前登陆用户感兴趣领域的项目列表。
## /api/project/members/
项目成员列表
## /api/project/member/[id]/
项目成员信息
## /api/project/posts/
项目大事纪列表
## /api/project/post/[id]/
项目大事纪信息
## /api/project/relations/
关系列表
## /api/project/relation/[id]/
关系信息
## /api/about/notices/
网站公告列表
## /api/about/notice/[id]/
网站公告信息
## /api/about/news/
平台新闻列表
## /api/about/news/[id]/
平台新闻信息
## /api/data/imagefileupload/
上传图片
## /api/data/imagefile/[id]/
获取指定id的图片
## /api/data/otherfileupload/
上传文件
## /api/data/otherfile/[id]/
获得指定id的文件
