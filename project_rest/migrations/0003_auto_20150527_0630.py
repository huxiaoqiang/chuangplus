# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_rest', '0002_auto_20150527_0626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image_path',
            field=models.ForeignKey(blank=True, to='data_rest.ImageFile', null=True),
        ),
    ]
