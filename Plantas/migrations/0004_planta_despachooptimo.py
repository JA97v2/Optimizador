# Generated by Django 4.0.4 on 2022-05-16 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Plantas', '0003_planta_factordeconversion'),
    ]

    operations = [
        migrations.AddField(
            model_name='planta',
            name='despachoOptimo',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]