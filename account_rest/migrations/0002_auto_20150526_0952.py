# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('account_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='real_name',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='tele',
        ),
        migrations.AddField(
            model_name='userinfo',
            name='company',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='field',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='gender',
            field=models.IntegerField(default=1, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='introduction',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='name',
            field=models.CharField(default='name', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userinfo',
            name='phone',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='province',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='title',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='weixin',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='role',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='user',
            field=models.OneToOneField(related_name='userinfo', to=settings.AUTH_USER_MODEL),
        ),
    ]
