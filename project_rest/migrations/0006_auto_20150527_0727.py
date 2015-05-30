# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_rest', '0005_auto_20150527_0701'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='pro_id',
            new_name='project',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='pro_id',
            new_name='project',
        ),
    ]
