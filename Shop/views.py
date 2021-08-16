from django.shortcuts import render
from .models import Product
from math import ceil
# Create your views here.
def   index(request):

   get_Value = Product.objects.values('Product_Category', 'id')
   itemsInCategory = {items['Product_Category'] for items in get_Value}
   allProducts = []
   for values in itemsInCategory:
        filterValues = Product.objects.filter(Product_Category = values)
        lengthList = len(filterValues)
        number_Slide = ceil(lengthList / 4)
        allProducts.append([number_Slide, filterValues, range(1, number_Slide)])
   parameterGen = {"allProducts": allProducts}
   return render(request, 'index.html', parameterGen)

def productView(request, productId):
     productFetch = Product.objects.filter(id = productId)
     print(productFetch)
     return render(request, 'productView.html', {'Product_Check': productFetch[0]})

def aboutus(request):
     return render(request, 'aboutus.html')