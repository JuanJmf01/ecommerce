from rest_framework import viewsets
from .serializer import EcologicalCategorySerializer, CategorySerializer, GenderCategoriesSerializer, ProductSerializer
from .models import Categories, EcologicalCategories, GenderCategories, Products


class EcologicalCategoriesView(viewsets.ModelViewSet):
    serializer_class = EcologicalCategorySerializer
    queryset = EcologicalCategories.objects.all()

class CategoriesViews(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Categories.objects.all()



class GenderCategoriesViews(viewsets.ModelViewSet):
    serializer_class = GenderCategoriesSerializer
    queryset = GenderCategories.objects.all()


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Products.objects.all()



