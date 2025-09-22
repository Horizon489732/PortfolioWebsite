from django.urls import path
from . import views

urlpatterns = [
    path('factorize/', views.factors_of, name="factorize")
]