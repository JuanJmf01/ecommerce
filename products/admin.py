from django.contrib import admin

from .models import *

# Register your models here.
admin.site.register(Products)
admin.site.register(Categories)
admin.site.register(EcologicalCategories)
admin.site.register(GenderCategories)
admin.site.register(PantsSizes)
admin.site.register(ShoesSizesUS)
admin.site.register(GeneralSizes)
admin.site.register(BrasSizes)

admin.site.register(ProductCategories)
admin.site.register(ProductEcologicalCategories)
admin.site.register(ProductGenderCategories)
admin.site.register(ProductPantsSizes)
admin.site.register(ProductShoesSizesUS)
admin.site.register(ProductGeneralSizes)
admin.site.register(ProductBrasSizes)
admin.site.register(ProductRatings)

