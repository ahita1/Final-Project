from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework import status
from django.contrib.auth import authenticate
from .serializers import LoginSerializer
from rest_framework.permissions import IsAuthenticated
from .models import PersonalInfoTable
from .serializers import PersonalInfoSerializer

class LoginAPIView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user:
                jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)
                return Response({'token': token}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class PersonalInfoAPIView(APIView):

    def get_object(self):
        try:
            return PersonalInfoTable.objects.get(user=1)
        except PersonalInfoTable.DoesNotExist:
            return None

    def get(self, request):
        personal_info = self.get_object()
        if personal_info:
            serializer = PersonalInfoSerializer(personal_info)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        # Check if personal information entry already exists for the user
        existing_personal_info = PersonalInfoTable.objects.filter(user=1)
        if existing_personal_info.exists():
            return Response({"detail": "Personal information entry already exists for this user."}, status=status.HTTP_403_FORBIDDEN)
        
        data = request.data.copy()
        data['user'] = request.user.id  # Fill 'user' field with the authenticated user's ID
        serializer = PersonalInfoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def put(self, request):
        personal_info = self.get_object()
        if personal_info:
            serializer = PersonalInfoSerializer(personal_info, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request):
        personal_info = self.get_object()
        if personal_info:
            personal_info.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
