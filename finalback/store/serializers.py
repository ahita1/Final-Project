from rest_framework import serializers
from .models import Category
from .models import SubCategory
from .models import Supplier
from .models import Product, Supplier, SubCategory
from users.serializers import CustomUserInfoSerializer





class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategoryListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()  # Use the CategorySerializer to serialize the category field

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

class ProsductListSerializer(serializers.ModelSerializer):
    suppleir = SupplierSerializer()  # Use the CategorySerializer to serialize the category field
    reciever= CustomUserInfoSerializer()
    subcategory = SubCategoryCreateSerializer()

    class Meta:
        model = Product
        fields = ['id', 'pro_name', 'suppleir' , 'reciever' ,'subcategory', 'import_means', 'quantity', 'serial_no', 'status', 'inserted_date', 't_price', 'u_price'  ]
    def get_category_name(self, obj):
        return obj.category.ca_name
    
    
class ProsductCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

    def get_category_name(self, obj):
        return obj.Product.pro_name