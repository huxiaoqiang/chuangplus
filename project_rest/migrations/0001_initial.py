# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import project_rest.models


class Migration(migrations.Migration):

    dependencies = [
        ('data_rest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('m_name', models.CharField(max_length=30)),
                ('m_title', models.CharField(max_length=30)),
                ('introduction', models.TextField(blank=True)),
                ('m_head_path', models.ForeignKey(to='data_rest.ImageFile')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField()),
                ('title', models.CharField(max_length=60)),
                ('content', models.TextField(blank=True)),
                ('link', models.CharField(max_length=250)),
                ('image_path', models.ForeignKey(to='data_rest.ImageFile', blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('field', models.CharField(max_length=30)),
                ('type', models.CharField(max_length=30)),
                ('slogan', models.CharField(max_length=120)),
                ('summary', models.TextField(blank=True)),
                ('province', models.CharField(max_length=30)),
                ('stage', models.CharField(max_length=30)),
                ('contact_name', models.CharField(max_length=30)),
                ('contact_phone', models.CharField(max_length=30)),
                ('contact_email', models.CharField(max_length=60)),
                ('contact_weixin', models.CharField(max_length=30)),
                ('link1', models.CharField(max_length=250, blank=True)),
                ('link2', models.CharField(max_length=250, blank=True)),
                ('link3', models.CharField(max_length=250, blank=True)),
                ('business_model', models.TextField(blank=True)),
                ('plan', models.TextField(blank=True)),
                ('market_analysis', models.TextField(max_length=200, blank=True)),
                ('competitor_analysis', models.TextField(max_length=200, blank=True)),
                ('customer_analysis', models.TextField(max_length=200, blank=True)),
                ('is_checked', models.CharField(default=b'ischecking', max_length=30)),
                ('is_roadshowing', models.CharField(default=b'noroadshow', max_length=30)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Relation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=100)),
                ('pro_id', models.IntegerField(verbose_name=project_rest.models.Project)),
                ('date', models.DateField()),
                ('type', models.IntegerField(default=0)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='pro_id',
            field=models.ForeignKey(to='project_rest.Project'),
        ),
        migrations.AddField(
            model_name='member',
            name='pro_id',
            field=models.ForeignKey(to='project_rest.Project'),
        ),
    ]
