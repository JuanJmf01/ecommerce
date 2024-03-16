from django.urls import path, include
from rest_framework import routers
from products import views


router = routers.DefaultRouter()

router.register(r'products', views.ProductView, 'products')
router.register(r'ecologicalCategories', views.EcologicalCategoriesView, 'ecologicalCategories')
router.register(r'categories', views.CategoriesViews, 'categories')
router.register(r'genderCategories', views.GenderCategoriesViews, 'genderCategories')

urlpatterns = [
    path("api/", include(router.urls)),
    path("api/products/by_category/<int:category_id>/", views.products_by_category, name='products_by_category'),
    path("api/products/by_ecologicalCategory/<int:category_id>/", views.products_by_ecologicalCategory, name='products_by_EcologicalCategory'),
    path("api/products/by_genderCategory/<int:category_id>/", views.products_by_genderCategory, name='products_by_genderCategory'),
]




