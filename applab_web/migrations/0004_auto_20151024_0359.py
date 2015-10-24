# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applab_web', '0003_auto_20151011_0249'),
    ]

    operations = [
        migrations.AddField(
            model_name='quote',
            name='type',
            field=models.CharField(default=b'web', max_length=50, choices=[(b'android', b'Android'), (b'ios', b'IOS'), (b'web', b'Web')]),
        ),
        migrations.AlterField(
            model_name='quote',
            name='project_type',
            field=models.CharField(default=b'new', max_length=50, choices=[(b'new', b'New'), (b'overhaul', b'Overhaul')]),
        ),
    ]
