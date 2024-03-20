from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Stores(models.Model):
    idStore = models.AutoField(primary_key=True)
    idUser = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=101)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'stores'

    def __str__(self):
        return self.name