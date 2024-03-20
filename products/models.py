from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User

from users.models import Stores

# Create your models here.

# Size fot shirts, T-shirts, blouses, breeches, boxers (XS, S, M, L, XL, XXL, XXXL)
class GeneralSizes(models.Model):
    idGeneralSize = models.AutoField(primary_key=True)    
    size = models.CharField(max_length=50)

    class Meta:
        db_table = 'generalSizes'

    def __str__(self):
        return self.size


# (38, 39, 39.5, 40, 40.5, 41, 42, 42.5, 43, 43.5, 44, 45, 46, 47, 48, 49, 50, 51)
class ShoesSizesUS(models.Model):
    idShoeSize = models.AutoField(primary_key=True)
    size = models.DecimalField(max_digits=2, decimal_places=1)

    class Meta:
        db_table = 'shoesSizes'

    def __str__(self):
        return self.size


# Sujetadores (30A, 30B, 30C, 30D, 32A, 32B, 32C, 32D, 34A, 34B, 34C, 34D, 36A, 36B, 36C, 36D, 38A, 38B, 38C, 38D)
class BrasSizes(models.Model):
    idBraSize = models.AutoField(primary_key=True)
    size = models.CharField(max_length=15)

    class Meta:
        db_table = 'BrasSizes'

    def __str__(self):
        return self.size



class PantsSizes(models.Model):
    idPantSize = models.AutoField(primary_key=True)
    size = models.CharField(max_length=50)

    class Meta:
        db_table = 'pantsSizes'
    
    def __str__(self):
        return self.size



# hombre - mujer - niños - niñas - bebes
class GenderCategories(models.Model):
    idGenderCategory = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20) 

    class Meta:
        db_table = 'genderCategories'

    def __str__(self):
        return self.name


       

# oganica, reciclable - fibra natual - vegana - biodegradable - comercio justo - certificada
class EcologicalCategories(models.Model):
    idEcologicalCategory = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20) 
    description = models.TextField()
    # image = models.ImageField(upload_to='ecological_category_images/', null=True, blank=True)

    class Meta:
        db_table = 'ecologicalCategories'

    def __str__(self):
        return self.name


# footwear - shirts - T-shirts - blouses - pants - underwear - caps - accessories - coats - sporty - swimwear, etc
class Categories(models.Model):
    idCategory = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30) 

    class Meta:
        db_table = 'categories'
    
    def __str__(self):
        return self.name


class Products(models.Model):
    idProduct = models.AutoField(primary_key=True)
    idStore = models.ForeignKey(Stores, on_delete=models.CASCADE)
    name = models.CharField(max_length=101)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null=True)
    # urlPrincipalImage = models.URLField()
    # imageName = models.CharField(max_length=255)
    image = models.ImageField(upload_to='product_image/')
    discount = models.PositiveIntegerField(default = 0, validators=[MinValueValidator(0), MaxValueValidator(100)])  
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'products'
    
    def __str__(self):
        return self.name


class ProductCategories(models.Model):
    idProductCategory = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idCategory = models.ForeignKey(Categories, on_delete=models.CASCADE)

    class Meta:
        db_table = 'productCategories'


class ProductEcologicalCategories(models.Model):
    idProductEcologicalCategory = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idEcologicalCategory = models.ForeignKey(EcologicalCategories, on_delete=models.CASCADE)

    class Meta:
        db_table = 'productEcologicalCategories'


class ProductGenderCategories(models.Model):
    idProductGenderCategory = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idGenderCategory = models.ForeignKey(GenderCategories, on_delete=models.CASCADE)

    class Meta:
        db_table = 'productGenderCategories'


class ProductGeneralSizes(models.Model):
    idProductGeneralSize = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idGeneralSize = models.ForeignKey(GeneralSizes, on_delete=models.CASCADE)
    quantityAvailable = models.PositiveIntegerField()  
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'productGeneralSizes'


class ProductShoesSizesUS(models.Model):
    idProductShoesSizeUS= models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idShoeSize = models.ForeignKey(ShoesSizesUS, on_delete=models.CASCADE)
    quantityAvailable = models.PositiveIntegerField()  
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'productShoesSizesUS'


class ProductBrasSizes(models.Model):
    idProductBrasSize= models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idBraSize = models.ForeignKey(BrasSizes, on_delete=models.CASCADE)
    quantityAvailable = models.PositiveIntegerField()  
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'productBrasSizes'


class ProductPantsSizes(models.Model):
    idProductPantSize= models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idPantSize = models.ForeignKey(PantsSizes, on_delete=models.CASCADE)
    quantityAvailable = models.PositiveIntegerField()  
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = '´productPantsSizes'


class ProductImages(models.Model):
    idProductImage = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    # imageName = models.CharField(max_length=255)
    # urlImage = models.URLField()

    class Meta:
        db_table = 'productImages'


class ProductRatings(models.Model):
    idProductRating = models.AutoField(primary_key=True)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    idRaterUser = models.ForeignKey(User, on_delete=models.CASCADE)     # qualifier user id
    # like = models.BooleanField(default=False)
    rating = models.IntegerField(default = 0,
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    class Meta:
        db_table = 'productRatings'

