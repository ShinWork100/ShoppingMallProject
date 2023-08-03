from django.contrib import admin
from django.urls import path, include
from . import views
from django.shortcuts import redirect

def redirect_to_api(request):
    return redirect('/api/')

urlpatterns = [
    path('', redirect_to_api),
    path('admin/', admin.site.urls),
    path('api/', include([
        path('', views.home),
        path('make-api-call/', views.make_api_call),
    ]))
]
