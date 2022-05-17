from django.shortcuts import render
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required
from Plantas.models import Planta # Importar modelos de la carpeta models en el mismo directorio (.models)

from scipy import optimize
import numpy as np
import matplotlib.pyplot as plt

# Create your views here.

@login_required
def Inicio(request: HttpRequest) -> render:
    plantas = Planta.objects.filter(activo__exact=True)         # Obtener plantas activas en la base de datos
    activeDicc = {                                              # Activar boton del menú lateral
        'inicio': 'active' 
    }
    despachoOptimo = 0                                          # Despacho optimo con plantas activas
    for planta in plantas:                                      # Iterar a través de las plantas activas
        despachoOptimo += planta.despachoOptimo                 # Incrementar el valor de despacho óptimo
    
    # Renderizar plantilla y enviar datos a plantilla html
    return render(request, 'inicio.html', {'plantas': plantas, 'active': activeDicc, 'despachoOptimo': despachoOptimo})

@login_required
def optimizarDespacho(request: HttpRequest) -> render:
    dictDatos = {}                                                  # Crear diccionario vacío para almacenar datos de plantas
    plantas = Planta.objects.filter(activo__exact=True)             # Obtener plantas activas en la base de datos
    requestPOST = request.POST.dict()                               # Convertir queryDict in dict
    despacho = requestPOST['despacho']                              # Almacenar despacho en variable
    for planta in plantas:                                          # Obtener los indices de las plantas a optimizar
        if str(planta.id) in requestPOST:                           # Verificar si el id es clave del diccionario
            dictDatos[planta.id] = {                                # Asignar id de planta como clave
                'nombre': planta.nombre,                            # Nombre de planta
                'linferior': planta.limiteInferior,                         # Limite inferior
                'lsuperior': planta.limiteSuperior,                         # Limite superior
                'res': float(requestPOST['restriccionPlanta'+str(planta.id)]),     # Restricción ingresada por el usuario
                'desOpt': planta.despachoOptimo,                            # Despacho óptimo
                'fc': planta.factorDeConversion,                            # Factor de conversión
                'cg3': planta.coeficienteGrado3,                            # Coeficiente grado 3
                'cg2':planta.coeficienteGrado2,                             # Coeficiente grado 2
                'cg1':planta.coeficienteGrado1,                             # Coeficiente grado 1
                'cg0':planta.coeficienteGrado0,                             # Coeficiente grado 0
                'desp': 0
            }

    optimizador = OptimizadorDespachos(dictDatos, despacho)
    datos = optimizador.main()

    activeDicc = {
        'inicio': 'active' 
    }
    return render(request, 'optimizarDespacho.html', {'active' : activeDicc, 'datos': datos, 'despacho': despacho})

'''
====================================================
    Lógica del obtimizador
====================================================
'''
class OptimizadorDespachos:
    
    def __init__(self, datos: dict, despacho: float) -> None:
        self.datos = datos
        self.despacho = despacho

    def main(self) -> dict:
        self.despachoPosible = 0                                                # Despacho posible con las restricciones ingresadas por el usuario
        for id in self.datos:                                                   # Iterar por cada planta en diccionario datos
            if self.datos[id]['res'] == 0:                                      # Verificar si la planta no tiene restricción (0)
                self.despachoPosible += self.datos[id]['lsuperior']             # Añadir limite superior al despacho posible
            elif ((self.datos[id]['res'] >= self.datos[id]['linferior']) and    # Verificar restricción mayor a limite inferior
                (self.datos[id]['res'] <= self.datos[id]['lsuperior'])):        # Verificar restricción menor a limite inferior
                self.despachoPosible += self.datos[id]['res']                   # Añadir restricción al despacho posible
            else:
                self.error = 'Restricción de la {} fuera de los limites'.format(self.datos[id]['nombre'])      # Generar mensaje de error
                return 0, self.error

        self.valoresIniciales = []                                              # Crear lista vacia para valores iniciales
        for id in self.datos:                                                   # Iterar por cada planta en diccionario datos
            if (self.datos[id]['desOpt'] <= self.datos[id]['res'] or
                self.datos[id]['res'] == 0):
                self.valoresIniciales.append(self.datos[id]['desOpt'])
            else:
                self.valoresIniciales.append(self.datos[id]['res'])
        if self.despachoPosible >= float(self.despacho):                        # Verificar si se puede cubrir el despacho
            # Ejecutar metodo para optimizar por eficiencia
            self.generarCondiciones()
            self.optimizar(self.valoresIniciales)
        else:
            self.error = 'Imposible cubrir el despacho con las restricciones actuales'   # Generar mensaje de error
            return 0, self.error
        
        return self.datos
    
    def generarCondiciones(self) -> None:
        self.condiciones = {}               # Crear lista vacia para almacenar condiciones
        for id in self.datos:               # Iterar por cada planta en diccionario datos
            if int(self.datos[id]['res']) == 0:
                self.condiciones[id] = {
                    'lp': (int(self.datos[id]['linferior']), int(self.datos[id]['lsuperior'])),
                    'rp': ({'type':'ineq','fun':lambda x:0})
                }
            else:
                self.condiciones[id] = {
                    'lp': (int(self.datos[id]['linferior']), int(self.datos[id]['res'])),
                    'rp': ({'type':'ineq','fun':lambda x:0})
                }

    def ffn(self, x):
        self.fps = {}                       # Crear lista vacia para almacenar condiciones
        for id in self.datos:               # Iterar por cada planta en diccionario datos
            self.fps[id] = [
                self.datos[id]['cg0'], self.datos[id]['cg1'], self.datos[id]['cg2'], self.datos[id]['cg3'],
            ]
        self.acumuladoFunciones = 0         # Crear variabe vacia para acumulado de funciones
        for fp in self.fps:                 # Iterar por cada funcion de planta
            self.acumuladoFunciones += self.fps[fp][3] * (x[0] ** 3) + self.fps[fp][2] * (x[0] ** 2) + self.fps[fp][1] * (x[0]) + self.fps[fp][0]
        return 1/self.acumuladoFunciones

    def fcons(self, x):
        self.fnObjeto = 0
        for i in range(0, len(self.datos)):
            self.fnObjeto += x[i]
        return self.fnObjeto - float(self.despacho)

    def optimizar(self, diniciales):
        # Lista con las condiciones iniciales de las plantas
        self.x0 = diniciales      
        self.limites = []
        self.cons = [({'type':'eq','fun':self.fcons})]
        
        for p in self.condiciones:
            self.limites.append(self.condiciones[p]['lp'])
        self.result = optimize.minimize(
            self.ffn,
            self.x0,
            method = 'SLSQP',
            bounds = self.limites,
            constraints = self.cons,
            options = {
                'ftol':0.001,
                'disp': False,
                'eps': 1.4901161193847656e-08,
                'maxiter':100
            }
        )

        # Convertir valores de diccionario a lista, es necesario para que funcione bien en HTML
        self.datos = list(self.datos.values()) 
        print(self.datos) 

        for i in range(0, len(self.datos)):
            self.datos[i]['desp'] = round(self.result['x'][i],3)

        print(self.datos)               
