from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListCreate.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', views.CategoryRetrieveUpdateDestroy.as_view(), name='category-detail'),
    path('subcategories/', views.SubCategoryListCreate.as_view(), name='subcategory-list-create'),
    path('subcategories/<int:pk>/', views.SubCategoryRetrieveUpdateDestroy.as_view(), name='subcategory-detail'),
    path('suppliers/', views.SupplierListCreate.as_view(), name='supplier-list-create'),
    path('suppliers/<int:pk>/', views.SupplierRetrieveUpdateDestroy.as_view(), name='supplier-detail'),
    path('products/', views.ProductListCreate.as_view(), name='product-list-create'),
    path('products/<int:pk>/', views.ProductRetrieveUpdateDestroy.as_view(), name='product-detail'),
]
