# Generated by Django 2.2 on 2019-08-11 14:51

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('our_clients', '0005_auto_20190811_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clients',
            name='contact_number',
            field=models.CharField(max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
