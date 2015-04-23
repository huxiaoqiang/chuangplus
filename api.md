# 后台接口说明
所有后台接口通过`/api/`访问。
## 注册及登陆
### /api/captcha/image/
获得一张 png 格式的验证码图片
### /api/account/register/
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
#### 注意
Django 具有 CSRF 机制。所以 POST 的时候，需要在 HTTP 请求添加头 X-CSRFToken ，内容为 cookie 中的 csrftoken。详见
<https://docs.djangoproject.com/en/1.8/ref/csrf/#ajax>
### /api/checkusername
验证用户名是否可用。
在注册页面，可以通过Ajax来测试用户名是否可用。向该 url 发送一个 json 来检测。发送内容只有一个键 "username"，内容是需要检测的用户名。返回的 json 也只有一个键 "exist"，即用户是否存在。
### /api/account/login/
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
## Userinfo 用户信息数据
### /api/data/userinfo/[username]/
获取 username 的用户信息。其中 username 为对应账户的用户名。
### /api/data/userinfo/createorupdate/
创建或更新当前登陆用户的用户信息。
## Project、Member、Post、Relation、Image 等数据
这5种数据的使用方式相似，以Project（项目信息）做为例子。
### /api/data/project/
获取项目列表。
#### 后缀
当用 GET 方法访问时，在url后添加后缀可选择返回的格式。例如，如果想返回json格式，可以这样：
```
    /api/data/project/.json
```
#### GET参数
##### page_size
每页显示多少条记录。默认为10.
##### page
显示第几页。
##### filter
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
#### 返回值
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
#### 新建一个 project
如果使用 POST 方法把一个 project 数据以 json 的形式推到这个 url，将会建立一条新数据。如果成功则返回该数据本身，包括 id。
### /api/data/project/[id]
访问、修改或删除索引为 id 的项目。
#### 后缀
同列表一样，当以 GET 方式访问时，在 url 后添加后缀可选择返回格式。
#### 修改数据
将修改后的数据以 PUT 的方式（注意不是 POST）推送到该 url，可以更新数据。
#### 删除数据
以 DELETE 的方式访问该 url，可以删除该条数据。
