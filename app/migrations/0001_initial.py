# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('pro_id', models.IntegerField()),
                ('image_path', models.CharField(max_length=250)),
                ('title', models.CharField(max_length=60)),
                ('text', models.CharField(max_length=60)),
                ('link', models.CharField(max_length=250)),
                ('date', models.DateField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('pro_id', models.IntegerField()),
                ('m_name', models.CharField(max_length=30)),
                ('m_head_path', models.CharField(max_length=250)),
                ('m_title', models.CharField(max_length=30)),
                ('introduction', models.TextField(blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('pro_id', models.IntegerField(default=0)),
                ('date', models.DateField()),
                ('title', models.CharField(max_length=60)),
                ('content', models.TextField(blank=True)),
                ('link', models.CharField(max_length=250)),
                ('image_path', models.CharField(max_length=250)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=30)),
                ('field1', models.CharField(max_length=30)),
                ('field2', models.CharField(max_length=30, blank=True)),
                ('field3', models.CharField(max_length=30, blank=True)),
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
                ('market_analysis', models.TextField(blank=True)),
                ('is_checked', models.CharField(default=b'\xe6\xad\xa3\xe5\x9c\xa8\xe5\xae\xa1\xe6\xa0\xb8\xe4\xb8\xad', max_length=30)),
                ('is_roadshowing', models.CharField(default=b'\xe6\x9c\xaa\xe8\xb7\xaf\xe6\xbc\x94', max_length=30)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='relation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('user_id', models.IntegerField()),
                ('pro_id', models.IntegerField()),
                ('date', models.DateField()),
                ('type', models.IntegerField(default=0)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='userinfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('role', models.IntegerField(default=1)),
                ('name', models.CharField(max_length=30)),
                ('gender', models.IntegerField(default=1)),
                ('phone', models.CharField(max_length=30)),
                ('weixin', models.CharField(max_length=30)),
                ('province', models.CharField(max_length=30)),
                ('field1', models.CharField(max_length=30)),
                ('field2', models.CharField(max_length=30)),
                ('field3', models.CharField(max_length=30)),
                ('company', models.CharField(max_length=30)),
                ('title', models.CharField(max_length=30)),
                ('introduction', models.TextField(blank=True)),
                ('user', models.OneToOneField(related_name='userinfo', to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
