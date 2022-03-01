from django.urls import path
from rest_framework_simplejwt import views

from .views import (
    UserCreate,
    UpdateUserView,
    ChangePasswordView,
    DeleteUserView,
    HelloView
    )


urlpatterns = [
    path('user/create/', UserCreate.as_view(), name='user_create'),
    path('user/token/', views.TokenObtainPairView.as_view(), name='token_optain_pair'),
    path('user/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloView.as_view(), name='hello'),
    path('user/update/<int:pk>/', UpdateUserView.as_view(), name='update_user'),
    path('user/change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password'),
    path('user/delete/<int:pk>/', DeleteUserView.as_view())
]