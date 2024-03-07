from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Products


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Products.objects.all()