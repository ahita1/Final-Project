from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import CategorySerializer,SubCategoryCreateSerializer,SubCategoryListSerializer,ProsductListSerializer, ProsductCreateSerializer
from .models import Supplier,Product,SubCategory,Category
from .serializers import SupplierSerializer




# categories haha
class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



# subcategories
class SubCategoryListCreate(generics.ListCreateAPIView):
    queryset = SubCategory.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return SubCategoryCreateSerializer
        return SubCategoryListSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.request.method == 'POST':
            # Pass queryset of categories to create serializer
            context['categories'] = Category.objects.all()
        return context

class SubCategoryRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategoryCreateSerializer

# supplier


class SupplierListCreate(generics.ListCreateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

class SupplierRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer




# Products haha



class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProsductCreateSerializer    



class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return ProsductCreateSerializer
        return ProsductListSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.request.method == 'POST':
            # Pass queryset of categories to create serializer
            context['products'] = Product.objects.all()
        return context
    