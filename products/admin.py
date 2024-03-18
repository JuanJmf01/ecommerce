from django.contrib import admin
from .models import Products, ProductCategories, ProductGenderCategories, ProductEcologicalCategories


# Register your models here.
admin.site.register(Products)
admin.site.register(ProductCategories)
admin.site.register(ProductGenderCategories)
admin.site.register(ProductEcologicalCategories)
