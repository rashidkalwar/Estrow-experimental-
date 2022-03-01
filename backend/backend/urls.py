"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import permissions
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.urls import path, include


schema_view = get_schema_view(
    title="Your Project",
    description="API for no one!",
    version="BETA",
    permission_classes=[permissions.AllowAny],
    public=True
    )

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('api/', include('accounts.urls')),
    #path('schema', schema_view, name='openapi-schema'),
    path('docs/', include_docs_urls(title='Estrow API'))
]
