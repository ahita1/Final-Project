from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser,PersonalInfoTable


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'user_id', 'role', 'is_staff', 'is_superuser' , 'first_name' , 'last_name']
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('user_id', 'role')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Custom Fields', {'fields': ('user_id', 'role')}),
    )
    search_fields = ('username', 'user_id')
    ordering = ('username',)

# Register your models here.
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(PersonalInfoTable)
