# -*- coding: utf-8 -*-
from django.db import models

from data_rest.models import ImageFile


# 项目表
class Project(models.Model):
    name = models.CharField(max_length=30)
    field = models.CharField(max_length=90)
    type = models.CharField(max_length=30)
    slogan = models.CharField(max_length=120)
    summary = models.TextField(blank=True)
    province = models.CharField(max_length=30)
    stage = models.CharField(max_length=30)
    contact_name = models.CharField(max_length=30)
    contact_phone = models.CharField(max_length=30)
    contact_email = models.EmailField()
    contact_weixin = models.CharField(max_length=30)
    link1 = models.CharField(max_length=250,blank=True)
    link2 = models.CharField(max_length=250,blank=True)
    link3 = models.CharField(max_length=250,blank=True)
    business_model = models.TextField(blank=True)
    plan = models.TextField(blank=True)
    market_analysis = models.TextField(blank=True, max_length=200)
    competitor_analysis = models.TextField(blank=True, max_length=200)
    customer_analysis = models.TextField(blank=True, max_length=200)
    is_checked = models.CharField(max_length=30,default="ischecking")
    is_roadshowing = models.CharField(max_length=30,default="noroadshow")
    date = models.DateField(auto_now_add=True)

    def __unicode__(self):
        return self.name


# 项目成员表
class Member(models.Model):
    project = models.ForeignKey('Project')
    m_name = models.CharField(max_length=30)
    m_head_path = models.ForeignKey('data_rest.ImageFile')
    m_title = models.CharField(max_length=30)
    introduction = models.TextField(blank=True)

    def __unicode__(self):
        return self.m_name + ' in ' + self.project.name


#  项目大事记
class Post(models.Model):
    project = models.ForeignKey('Project')
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('data_rest.ImageFile', blank=True, null=True)

    def __unicode__(self):
        return self.title + ' for ' + self.project.name


# 关系表
class Relation(models.Model):
    username = models.CharField(max_length=100)
    project = models.ForeignKey('Project')
    date = models.DateField()
    type = models.IntegerField(default=0) # 0:用户创建项目; 1:关注; 2:收藏; 3:爆灯

    def __unicode__(self):
        return self.username + ' in ' + self.project.name
