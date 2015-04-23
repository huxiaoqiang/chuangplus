# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='image',
        ),
        migrations.DeleteModel(
            name='member',
        ),
        migrations.DeleteModel(
            name='post',
        ),
        migrations.DeleteModel(
            name='project',
        ),
        migrations.DeleteModel(
            name='relation',
        ),
        migrations.RemoveField(
            model_name='userinfo',
            name='user',
        ),
        migrations.DeleteModel(
            name='userinfo',
        ),
    ]
