from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, filters
from django.db.models import Q
from .models import Stores
from .serializer import StoreSerializer

class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Stores.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'idStore']  # Agrega los campos de búsqueda que desees

    def get_queryset(self):
        queryset = super().get_queryset()
        search_query = self.request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query)
            )
        return queryset
