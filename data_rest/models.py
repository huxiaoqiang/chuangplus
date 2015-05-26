# -*- coding: utf-8 -*-
from django.db import models
import json
import re


class Image(models.Model):
    pro_id = models.IntegerField()
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
