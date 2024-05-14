# Generated by Django 5.0.6 on 2024-05-13 21:13

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_alter_allocation_schedule_time_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='reciever',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='reciever', to=settings.AUTH_USER_MODEL),
        ),
    ]