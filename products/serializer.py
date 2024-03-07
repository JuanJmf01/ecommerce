# Un serializer es una clase que se utiliza para convertir datos complejos, 
# como instancias de modelos de Django, en tipos de datos nativos de Python 
# (como diccionarios) que luego pueden ser serializados a formatos como JSON. 

from rest_framework import serializers
from .models import Products


class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Products
        fields = '__all__'