from rest_framework import viewsets
from .serializer import EcologicalCategorySerializer, CategorySerializer, GenderCategoriesSerializer, ProductSerializer
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view


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


@api_view(['GET'])
def products_by_category(request, category_id):
    """
    This Python function retrieves all products associated with a specific category and serializes them
    for a response.
    
    :param request: The `request` parameter in the `products_by_category` function is typically an
    object that represents the HTTP request made to the server. It contains information such as the
    request method (GET, POST, etc.), headers, user data, and any data sent in the request body. In this
    context,
    :param category_id: Category ID is the unique identifier for a specific category in the database. It
    is used to filter and retrieve all products associated with that particular category
    :return: The function `products_by_category` is returning a Response object containing the
    serialized data of all products associated with the given `category_id`.
    """
    # Obtener todos los productos asociados a la categoría
    products = Products.objects.filter(productcategories__idCategory=category_id)
    
    # Serializar los productos y devolver la respuesta
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def products_by_ecologicalCategory(request, category_id):
    """
    This Python function retrieves and serializes products associated with a specific ecological
    category ID.
    
    :param request: The `request` parameter in the `products_by_ecologicalCategory` function is
    typically an object that contains information about the current HTTP request, such as the request
    method, headers, user data, and more. It is commonly used in web frameworks like Django or Flask to
    handle incoming HTTP requests and generate
    :param category_id: The `category_id` parameter is the unique identifier or ID of the ecological
    category for which you want to retrieve the associated products. This ID is used to filter the
    products in the database based on the ecological category to which they belong
    :return: The function `products_by_ecologicalCategory` is returning a response containing serialized
    data of all products associated with a specific ecological category identified by the `category_id`.
    The products are filtered based on the `idEcologicalCategory` field in the
    `productecologicalcategories` table. The serialized data of these products is then returned as the
    response.
    """
    # Obtener todos los productos asociados a la categoría
    products = Products.objects.filter(productecologicalcategories__idEcologicalCategory=category_id)
    
    # Serializar los productos y devolver la respuesta
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def products_by_genderCategory(request, category_id):
    """
    This Python function retrieves and serializes products associated with a specific gender category.
    
    :param request: The `request` parameter in the `products_by_genderCategory` function is typically an
    object that represents the HTTP request made to the server. It contains information such as the
    request method (GET, POST, etc.), headers, user data, and any data sent in the request body. In
    Django,
    :param category_id: The `category_id` parameter is the unique identifier of the gender category for
    which you want to retrieve products. It is used to filter the products based on the specified gender
    category
    :return: The function `products_by_genderCategory` returns a Response object containing the
    serialized data of all products associated with the specified category ID.
    """
    # Obtener todos los productos asociados a la categoría
    products = Products.objects.filter(productgendercategories__idGenderCategory=category_id)
    
    # Serializar los productos y devolver la respuesta
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)



