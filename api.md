# 后台接口说明
所有后台接口通过`/api/`访问。
## 注册及登陆
###获得验证码
访问 `/api/captcha/image/` 获得一张 png 格式的验证码图片
###注册
向 `/api/account/register/` POST 一个 json 来注册。格式：
```javascript
    {
        "username":"someone",
        "email":"someone@somewhere.com",
        "password":"secret",
        "captcha":"FE3c"
    }
```
####注意
Django 具有 CSRF 机制。所以 POST 的时候，需要在 HTTP 请求添加头 X-CSRFToken ，内容为 cookie 中的 csrftoken。详见
<https://docs.djangoproject.com/en/1.8/ref/csrf/#ajax>
###验证用户名是否可用
在注册页面，可以通过Ajax来测试用户名是否可用。向 `/api/checkusername` 发送一个json来检测。发送内容只有一个键 "username"，内容是需要检测的用户名。返回的 json 也只有一个健 "exist"，即用户是否存在。
###登陆
后台使用的是 token 登陆模式。向 `/api/account/login/` POST 一个 json 来获得 token。格式：
```javascript
    {
        "username":"someone",
        "password":"secret"
    }
```
后台将返回一个 json，只有一个键 token。得到 token 后，遇到需要验证身份的请求，在请求 HTTP 加入头 Authorization。注意键值应该以字符串 "Token" 开头。例如：
```
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```
## 用户信息
