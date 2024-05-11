from django.contrib import admin
from .models import CustomUser
from .forms import CustomUserCreationForm

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'user_id', 'role', 'password']
    form = CustomUserCreationForm  # Use custom form for adding users

admin.site.register(CustomUser, CustomUserAdmin)
