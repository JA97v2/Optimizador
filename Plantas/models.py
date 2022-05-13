from django.db import models

# Create your models here.
class Planta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=30)
    limiteInferior = models.FloatField()
    limiteSuperior = models.FloatField()
    coeficienteGrado3 = models.FloatField()
    coeficienteGrado2 = models.FloatField()
    coeficienteGrado1 = models.FloatField()
    coeficienteGrado0 = models.FloatField()
    activo = models.BooleanField()

    def __str__(self) -> str:
        texto = '{0} | {1} | {2} | {3} | {4} | {5} | {6} | {7} | {8} '
        return texto.format(
            self.id, self.nombre, self.limiteInferior, self.limiteSuperior,
            self.coeficienteGrado3, self.coeficienteGrado2, self.coeficienteGrado1,
            self.coeficienteGrado0, self.activo
        )
