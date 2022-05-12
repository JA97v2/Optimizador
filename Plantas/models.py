from django.db import models

# Create your models here.
class Plantas(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    limiteInferior = models.FloatField()
    limiteSuperior = models.FloatField()
    coeficienteGrado3 = models.FloatField()
    coeficienteGrado2 = models.FloatField()
    coeficienteGrado1 = models.FloatField()
    coeficienteGrado0 = models.FloatField()
    activo = models.BooleanField()
