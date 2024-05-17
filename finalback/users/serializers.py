from rest_framework import serializers
from .models import PersonalInfoTable,CustomUser


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)



class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfoTable
        fields = '__all__'


class CustomUserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['user_id', 'username', 'first_name' , 'last_name' ]
