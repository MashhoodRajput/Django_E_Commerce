from django.urls import path
from .import views
urlpatterns = [
    path('', views.index),
    path('products/productsView/<int:productId>', views.productView, name='productsView'),
    path('aboutus', views.aboutus, name='aboutus')
]