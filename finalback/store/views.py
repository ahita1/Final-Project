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

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            # Use a serializer without detailed information for PUT requests
            return ProsductCreateSerializer
        else:
            # Use a serializer with detailed information for other requests (GET, PATCH, DELETE)
            return ProsductListSerializer

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
    









from rest_framework import generics
from .models import Order
from .serializers import OrderListSerializer, OrderCreateSerializer

class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return OrderCreateSerializer
        return OrderListSerializer

class OrderRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            # Use a serializer without detailed information for PUT requests
            return OrderCreateSerializer
        else:
            # Use a serializer with detailed information for other requests (GET, PATCH, DELETE)
            return OrderListSerializer








from rest_framework import generics
from .models import Allocation
from .serializers import AllocationListSerializer, AllocationCreateSerializer

class AllocationListCreate(generics.ListCreateAPIView):
    queryset = Allocation.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AllocationCreateSerializer
        return AllocationListSerializer

class AllocationRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Allocation.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            return AllocationCreateSerializer
        return AllocationListSerializer







from rest_framework import generics
from .models import Distribution
from .serializers import DistributionListSerializer, DistributionCreateSerializer

class DistributionListCreate(generics.ListCreateAPIView):
    queryset = Distribution.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return DistributionCreateSerializer
        return DistributionListSerializer

class DistributionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Distribution.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'PUT':
            return DistributionCreateSerializer
        return DistributionListSerializer
