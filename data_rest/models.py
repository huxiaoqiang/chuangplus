# -*- coding: utf-8 -*-
from django.db import models
import json
import re



# 项目表
class Project(models.Model):
    name = models.CharField(max_length=30)
    field1 = models.CharField(max_length=30)
    field2 = models.CharField(max_length=30,blank=True)
    field3 = models.CharField(max_length=30,blank=True)
    type = models.CharField(max_length=30)
    slogan = models.CharField(max_length=120)
    summary = models.TextField(blank=True)
    province = models.CharField(max_length=30)
    stage = models.CharField(max_length=30)
    contact_name = models.CharField(max_length=30)
    contact_phone = models.CharField(max_length=30)
    contact_email = models.CharField(max_length=60)
    contact_weixin = models.CharField(max_length=30)
    link1 = models.CharField(max_length=250,blank=True)
    link2 = models.CharField(max_length=250,blank=True)
    link3 = models.CharField(max_length=250,blank=True)
    business_model = models.TextField(blank=True)
    plan = models.TextField(blank=True)
    market_analysis = models.TextField(blank=True)
    is_checked = models.CharField(max_length=30,default="ischecking")
    is_roadshowing = models.CharField(max_length=30,default="noroadshow")
    date = models.DateField(auto_now_add=True)


# 项目成员表
class Member(models.Model):
    pro_id = models.ForeignKey('Project')
    m_name = models.CharField(max_length=30)
    m_head_path = models.CharField(max_length=250)
    m_title = models.CharField(max_length=30)
    introduction = models.TextField(blank=True)


# 文章表（包括网站公告、平台新闻、大事记）
class Post(models.Model):
    pro_id = models.IntegerField(default=0) # pro_id=-1:网站公告; pro_id=0:平台新闻; pro_id=projects.pro_id:项目大事记;
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.CharField(max_length=250)


# 关系表
class Relation(models.Model):
    username = models.CharField(max_length=100)
    pro_id = models.IntegerField(Project)
    date = models.DateField()
    type = models.IntegerField(default=0) # 0:用户创建项目; 1:关注; 2:收藏; 3:爆灯


# 图片表
class Image(models.Model):
    pro_id = models.IntegerField() # pro_id=-1：首页滚动焦点图; pro_id=0:其他地方插图; pro_id=projects.pro_id:项目路演ppt图
    image_path = models.CharField(max_length=250)
    title = models.CharField(max_length=60)
    text = models.CharField(max_length=60)
    link = models.CharField(max_length=250)
    date = models.DateField()


class ImageFile(models.Model):
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=200)


class OtherFile(models.Model):
    file = models.FileField(upload_to='files/')
    name = models.CharField(max_length=200)
