# Un serializer es una clase que se utiliza para convertir datos complejos, 
# como instancias de modelos de Django, en tipos de datos nativos de Python 
# (como diccionarios) que luego pueden ser serializados a formatos como JSON. 

from rest_framework import serializers
from .models import *

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


class ProductCategoriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductCategories
        fields = '__all__'

class ProductEcologicalCategoriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductEcologicalCategories
        fields = '__all__'

class ProductGenderCategoriesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductGenderCategories
        fields = '__all__'

class ProductGeneralSizesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductGeneralSizes
        fields = '__all__'

class ProductShoesSizesUSSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductShoesSizesUS
        fields = '__all__'

class ProductBrasSizesUSSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductBrasSizes
        fields = '__all__'


class ProductPantsSizesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductPantsSizes
        fields = '__all__'

class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductImages
        fields = '__all__'



