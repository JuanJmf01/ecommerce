# Un serializer es una clase que se utiliza para convertir datos complejos, 
# como instancias de modelos de Django, en tipos de datos nativos de Python 
# (como diccionarios) que luego pueden ser serializados a formatos como JSON. 

from rest_framework import serializers
from .models import Categories, EcologicalCategories, Products,  GenderCategories


class EcologicalCategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = EcologicalCategories
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Categories
        fields = '__all__'


class GenderCategoriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = GenderCategories
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Products
        fields = '__all__'

