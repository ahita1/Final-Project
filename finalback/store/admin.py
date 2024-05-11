from django.contrib import admin
from .models import Category,SubCategory,Supplier,Product,Order,Allocation,Distribution



admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Supplier)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Allocation)
admin.site.register(Distribution)

