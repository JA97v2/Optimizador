from django.shortcuts import render
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required
from Plantas.models import Planta # Importar modelos de la carpeta models en el mismo directorio (.models)

# Create your views here.

@login_required
def Inicio(request: HttpRequest) -> render:
    plantas = Planta.objects.filter(activo__exact=True)
    activeDicc = {
        'inicio': 'active' 
    }
    return render(request, 'inicio.html',  {'plantas': plantas, 'active' : activeDicc})