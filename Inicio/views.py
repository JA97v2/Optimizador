from django.shortcuts import render
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required
def Inicio(request: HttpRequest) -> render:
    activeDicc = {
        'inicio': 'active' 
    }
    return render(request, 'inicio.html', {'active' : activeDicc})