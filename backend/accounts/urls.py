from django.urls import path

from .views import UserCreate



urlpatterns = [
    path('create/', UserCreate.as_view(), name='user_create'),
]