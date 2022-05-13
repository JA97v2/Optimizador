from django.urls import path
from . import views # Importar el archivo con las vistas que está en el mismo directorio (.)

urlpatterns = [
    # -- Datos --
    path('', views.Plantas, name='plantas'),
    path('agregar/', views.AgregarPlanta, name='agregarPlanta'),
    path('editar/', views.EditarPlanta, name='editarPlanta'),
    path('eliminar/', views.EliminarPlanta, name='eliminarPlanta'),
]