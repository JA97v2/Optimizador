from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from django.contrib.auth.decorators import login_required
from .models import Planta # Importar modelos de la carpeta models en el mismo directorio (.models)


# Create your views here.
@login_required
def Plantas(request: HttpRequest) -> render:
    plantas = Planta.objects.filter(activo__exact=True)                                     # Obtener objetos activos
    activeDicc = {
        'plantas': 'active' 
    }
    return render(request, 'plantas.html', {'plantas': plantas, 'active' : activeDicc})

@login_required
def AgregarPlanta(request: HttpRequest) -> render:
    planta = Planta.objects.create(                                 # Crear objeto
        nombre = request.POST['nombre'],
        limiteInferior = request.POST['limiteInferior'],
        limiteSuperior = request.POST['limiteSuperior'],
        factorDeConversion = request.POST['factorDeConversion'],
        despachoOptimo = request.POST['despachoOptimo'],
        coeficienteGrado3 = request.POST['coeficienteGrado3'],
        coeficienteGrado2 = request.POST['coeficienteGrado2'],
        coeficienteGrado1 = request.POST['coeficienteGrado1'],
        coeficienteGrado0 = request.POST['coeficienteGrado0'],
        activo = True
    )
    return redirect('plantas')                                      # Redireccionar a determinada pagina

@login_required
def EditarPlanta(request: HttpRequest) -> render:
    planta = Planta.objects.get(id=int(request.POST['id']))         # Obtener objeto con id especifica
    planta.nombre = request.POST['nombre']          # Modificar atributo de objeto
    planta.limiteInferior = request.POST['limiteInferior']          # Modificar atributo de objeto
    planta.limiteSuperior = request.POST['limiteSuperior']          # Modificar atributo de objeto
    planta.factorDeConversion = request.POST['factorDeConversion']          # Modificar atributo de objeto
    planta.despachoOptimo = request.POST['despachoOptimo']          # Modificar atributo de objeto
    planta.coeficienteGrado3 = request.POST['coeficienteGrado3']    # Modificar atributo de objeto
    planta.coeficienteGrado2 = request.POST['coeficienteGrado2']    # Modificar atributo de objeto
    planta.coeficienteGrado1 = request.POST['coeficienteGrado1']    # Modificar atributo de objeto
    planta.coeficienteGrado0 = request.POST['coeficienteGrado0']    # Modificar atributo de objeto
    planta.save()                                                   # Guardar modificaciones
    return redirect('plantas')                                      # Redireccionar a determinada pagina

@login_required
def EliminarPlanta(request: HttpRequest) -> render:
    planta = Planta.objects.get(id=int(request.POST['id']))         # Obtener objeto con id especifica
    planta.activo = False                                           # Modificar atributo de objeto
    planta.save()                                                   # Guardar modificaciones
    return redirect('plantas')                                      # Redireccionar a determinada pagina

@login_required
def optimizarDespacho(request: HttpRequest) -> render:
    # Crear lista de indices ingresados por el usuario
    indices = [
        request.POST(['id'])
    ]
    pass

'''
====================================================
    Lógica del obtimizador
====================================================
'''
class OptimizadorDespachos:
    
    def __init__(self) -> None:
        pass

    def verificarDatos(self) -> None:
        pass