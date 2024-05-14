from rest_framework import serializers
from .models import Category
from .models import SubCategory
from .models import Supplier
from .models import Product, Supplier, SubCategory





class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategoryListSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.ca_name')

    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'category']

    def get_category_name(self, obj):
        return obj.category.ca_name
    
class SubCategoryCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubCategory
        fields = ['id', 'name', 'category']

    def get_category_name(self, obj):
        return obj.category.ca_name


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'





class ProductSerializer(serializers.ModelSerializer):
    subcategory = serializers.CharField(source='subcategory.name')

    class Meta:
        model = Product
        fields = '__all__'
