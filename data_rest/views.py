# encoding:utf-8

from django.contrib.auth.models import User
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import ImageSerializer, ImageFileSerializer, OtherFileSerializer
from .models import Image, ImageFile, OtherFile


class ImageList(generics.ListCreateAPIView):
    serializer_class = ImageSerializer

class ImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ImageFileCreate(generics.CreateAPIView):
    serializer_class = ImageFileSerializer
    parser_classes = (MultiPartParser, FormParser,)

class ImageFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ImageFile.objects.all()
    serializer_class = ImageFileSerializer


class OtherFileCreate(generics.CreateAPIView):
    serializer_class = OtherFileSerializer
    parser_classes = (MultiPartParser, FormParser,)

class OtherFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OtherFile.objects.all()
    serializer_class = OtherFileSerializer
