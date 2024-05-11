from django.urls import path
from .views import LoginAPIView,PersonalInfoAPIView

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    path('personal-info/', PersonalInfoAPIView.as_view(), name='personal-info'),
    path('personal-info/<int:pk>/', PersonalInfoAPIView.as_view(), name='personal-info-detail'),

]
