# -*- coding: utf-8 -*-
from django.db import models


# 网站公告
class Notice(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('data_rest.ImageFile', blank=True, null=True)

    def __unicode__(self):
        return self.title


# 平台新闻
class News(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('data_rest.ImageFile', blank=True, null=True)

    def __unicode__(self):
        return self.title
