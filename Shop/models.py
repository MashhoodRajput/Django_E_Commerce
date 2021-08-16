from django.db import models

# Create your models here.
class Product(models.Model):
    Product_ID = models.AutoField
    Product_name = models.CharField(max_length=100)
    Product_Category = models.CharField(max_length=50)
    Product_Description = models.CharField(max_length=1000)
    Product_Available = models.IntegerField(default=False)
    Product_Image =models.ImageField(upload_to='ProductImages')

    def __str__(self):
        return self.Product_name

