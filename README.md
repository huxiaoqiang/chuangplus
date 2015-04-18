# chuangplus
##框架结构
后台框架：django+mysql
前台框架：angularjs
##环境搭建
python2.7 django1.5 mysql数据库
##接口使用
###获得验证码
访问 /Captcha/image 获得一张 png 格式的验证码图片
###注册
向 /Account/Register/ POST 一个 json 来注册。格式：
```javascript
    {
        "username":"someone",
        "email":"someone@somewhere.com",
        "password":"secret",
        "captcha":"FE3c"
    }
```
####注意
Django 具有CSRF机制。所以POST的时候，需要在HTTP请求添加头 X-CSRFToken ，内容为cookie中的 csrftoken。详见
[https://docs.djangoproject.com/en/1.8/ref/csrf/#ajax](https://docs.djangoproject.com/en/1.8/ref/csrf/#ajax)
###登陆
后台使用的是token登陆模式。向 /Account/Login/ POST 一个json来获得token。格式：
```javascript
    {
        "username":"someone",
        "password":"secret"
    }
```
后台将返回一个json，只有一个键 token。得到 token 后，遇到需要验证身份的请求，在请求HTTP加入头 Authorization。注意键值应该以字符串 "Token" 开头。例如：
```
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```

