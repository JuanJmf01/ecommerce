# Generated by Django 5.0.3 on 2024-03-17 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoessizesus',
            name='size',
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
    ]