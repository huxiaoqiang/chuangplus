# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='relation',
            name='user_id',
        ),
        migrations.AddField(
            model_name='relation',
            name='username',
            field=models.CharField(default='u', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='project',
            name='is_checked',
            field=models.CharField(default=b'ischecking', max_length=30),
        ),
        migrations.AlterField(
            model_name='project',
            name='is_roadshowing',
            field=models.CharField(default=b'noroadshow', max_length=30),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='company',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='field1',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='field2',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='field3',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='gender',
            field=models.IntegerField(default=1, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='phone',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='province',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='title',
            field=models.CharField(max_length=30, blank=True),
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='weixin',
            field=models.CharField(max_length=30, blank=True),
        ),
    ]
