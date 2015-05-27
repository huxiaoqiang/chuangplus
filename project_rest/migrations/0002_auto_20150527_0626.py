# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('project_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='contact_email',
            field=models.EmailField(max_length=254),
        ),
    ]
