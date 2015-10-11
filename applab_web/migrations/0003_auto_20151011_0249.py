# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applab_web', '0002_quote_date_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quote',
            name='image',
        ),
        migrations.AddField(
            model_name='quote',
            name='file',
            field=models.FileField(null=True, upload_to=b'uploads/'),
        ),
    ]
