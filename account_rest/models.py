# -*- coding: utf-8 -*-
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
    field = models.CharField(max_length=90,blank=True)
    company = models.CharField(max_length=30,blank=True)
    title = models.CharField(max_length=30,blank=True)
    introduction = models.TextField(blank=True)
    user = models.OneToOneField(User, related_name="userinfo")

    def __unicode__(self):
        return self.user.username
