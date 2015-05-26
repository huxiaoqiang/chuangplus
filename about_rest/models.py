from django.db import models

from data_rest.models import ImageFile


# 网站公告
class Notice(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('ImageFile', blank=True)


# 平台新闻
class News(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=60)
    content = models.TextField(blank=True)
    link = models.CharField(max_length=250)
    image_path = models.ForeignKey('ImageFile', blank=True)
