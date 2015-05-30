# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_rest', '0004_auto_20150527_0632'),
    ]

    operations = [
        migrations.RenameField(
            model_name='relation',
            old_name='pro_id',
            new_name='project',
        ),
    ]
