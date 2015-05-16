# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import data_rest.models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
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
            name='ImageFile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=b'images/')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
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
            name='OtherFile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('file', models.FileField(upload_to=b'files/')),
                ('name', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Post',
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
            name='Project',
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
                ('is_checked', models.CharField(default=b'ischecking', max_length=30)),
                ('is_roadshowing', models.CharField(default=b'noroadshow', max_length=30)),
                ('date', models.DateField(auto_now_add=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Relation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=100)),
                ('pro_id', models.IntegerField(verbose_name=data_rest.models.Project)),
                ('date', models.DateField()),
                ('type', models.IntegerField(default=0)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Userinfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('role', models.IntegerField(default=1)),
                ('name', models.CharField(max_length=30)),
                ('gender', models.IntegerField(default=1, blank=True)),
                ('phone', models.CharField(max_length=30, blank=True)),
                ('weixin', models.CharField(max_length=30, blank=True)),
                ('province', models.CharField(max_length=30, blank=True)),
                ('field1', models.CharField(max_length=30, blank=True)),
                ('field2', models.CharField(max_length=30, blank=True)),
                ('field3', models.CharField(max_length=30, blank=True)),
                ('company', models.CharField(max_length=30, blank=True)),
                ('title', models.CharField(max_length=30, blank=True)),
                ('introduction', models.TextField(blank=True)),
                ('user', models.OneToOneField(related_name='userinfo', to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='member',
            name='pro_id',
            field=models.ForeignKey(to='data_rest.Project'),
            preserve_default=True,
        ),
    ]
