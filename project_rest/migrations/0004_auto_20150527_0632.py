# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_rest', '0003_auto_20150527_0630'),
    ]

    operations = [
        migrations.AlterField(
            model_name='relation',
            name='pro_id',
            field=models.ForeignKey(to='project_rest.Project'),
        ),
    ]
