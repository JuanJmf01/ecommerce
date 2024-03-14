from django.urls import path, include
from rest_framework import routers
from products import views

router = routers.DefaultRouter()

router.register(r'products', views.ProductView, 'products')
router.register(r'ecologicalCategories', views.EcologicalCategoriesView, 'ecologicalCategories')
router.register(r'categories', views.CategoriesViews, 'categories')
router.register(r'genderCategories', views.GenderCategoriesViews, 'genderCategories')

urlpatterns = [
    path("api/", include(router.urls))
]




