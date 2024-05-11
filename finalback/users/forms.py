# forms.py

from django import forms
from .models import CustomUser

class CustomUserCreationForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'user_id', 'role', 'password']
        widgets = {
            'password': forms.PasswordInput(),  # Render password field as a password input widget
        }
