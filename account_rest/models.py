from django.db import models
from django.contrib.auth.models import User


# userinfo 
class Userinfo(models.Model):
    role = models.IntegerField(default=1)
    name = models.CharField(max_length=30)
    gender = models.IntegerField(default=1,blank=True)
    phone = models.CharField(max_length=30,blank=True)
    weixin = models.CharField(max_length=30,blank=True)
    province = models.CharField(max_length=30,blank=True)
    field1 = models.CharField(max_length=30,blank=True)
    field2 = models.CharField(max_length=30,blank=True)
    field3 = models.CharField(max_length=30,blank=True)
    company = models.CharField(max_length=30,blank=True)
    title = models.CharField(max_length=30,blank=True)
    introduction = models.TextField(blank=True)
    user = models.OneToOneField(User, related_name="userinfo")
