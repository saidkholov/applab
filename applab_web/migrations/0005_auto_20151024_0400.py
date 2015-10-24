# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applab_web', '0004_auto_20151024_0359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quote',
            name='project_link',
            field=models.URLField(null=True, blank=True),
        ),
    ]
