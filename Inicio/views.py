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
    return render(request, 'inicio.html', {'plantas': plantas, 'active' : activeDicc})

@login_required
def optimizarDespacho(request: HttpRequest) -> render:
    # Crear lista de indices ingresados por el usuario
    for item in request.POST:
        print(item)
    activeDicc = {
        'inicio': 'active' 
    }
    return render(request, 'optimizarDespacho.html', {'active' : activeDicc})

'''
====================================================
    Lógica del obtimizador
====================================================
'''
class OptimizadorDespachos:
    
    def __init__(self) -> None:
        # Crear lista de indices de las plantas a optimizar
        pass

    def verificarDatos(self) -> None:
        pass