# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('about_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='image_path',
            field=models.ForeignKey(blank=True, to='data_rest.ImageFile', null=True),
        ),
        migrations.AlterField(
            model_name='notice',
            name='image_path',
            field=models.ForeignKey(blank=True, to='data_rest.ImageFile', null=True),
        ),
    ]
