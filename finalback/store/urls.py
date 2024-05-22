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
    path('orders/', views.OrderListCreate.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', views.OrderRetrieveUpdateDestroy.as_view(), name='order-detail'),
    path('allocations/', views.AllocationListCreate.as_view(), name='allocation-list-create'),
    path('allocations/<int:pk>/', views.AllocationRetrieveUpdateDestroy.as_view(), name='allocation-detail'),
    path('distributions/', views.DistributionListCreate.as_view(), name='distribution-list-create'),
    path('distributions/<int:pk>/', views.DistributionRetrieveUpdateDestroy.as_view(), name='distribution-detail'),
]
