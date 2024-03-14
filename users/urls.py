from django.urls import path, include
from rest_framework import routers
from products import views

router = routers.DefaultRouter()

# router.register(r'users', views.ProductView, 'users')

urlpatterns = [
    path("api/", include(router.urls))
]




