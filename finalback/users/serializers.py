from rest_framework import serializers
from .models import PersonalInfoTable


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)



class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfoTable
        fields = '__all__'
