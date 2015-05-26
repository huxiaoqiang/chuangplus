from django.db import models

from data_rest.models import ImageFile


# 项目表
class Project(models.Model):
    name = models.CharField(max_length=30)
    field = models.CharField(max_length=30)
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
    market_analysis = models.TextField(blank=True, max_length=200)
    competitor_analysis = models.TextField(blank=True, max_length=200)
    customer_analysis = models.TextField(blank=True, max_length=200)
    is_checked = models.CharField(max_length=30,default="ischecking")
    is_roadshowing = models.CharField(max_length=30,default="noroadshow")
    date = models.DateField(auto_now_add=True)


# 项目成员表
class Member(models.Model):
    pro_id = models.ForeignKey('Project')
    m_name = models.CharField(max_length=30)
    m_head_path = models.ForeignKey('ImageFile')
    m_title = models.CharField(max_length=30)
    introduction = models.TextField(blank=True)


#  项目大事记
class Post(models.Model):
    pro_id = models.ForeignKey('Project')
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('ImageFile', blank=True)


# 关系表
class Relation(models.Model):
    username = models.CharField(max_length=100)
    pro_id = models.IntegerField(Project)
    date = models.DateField()
    type = models.IntegerField(default=0) # 0:用户创建项目; 1:关注; 2:收藏; 3:爆灯
