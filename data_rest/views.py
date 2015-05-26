# encoding:utf-8

from django.contrib.auth.models import User
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser

from .serializers import UserinfoSerializer, ProjectSerializer, MemberSerializer, PostSerializer, RelationSerializer, ImageSerializer, ImageFileSerializer, OtherFileSerializer
from .models import Userinfo, Project, Member, Post, Relation, Image


class ImageList(generics.ListCreateAPIView):
    serializer_class = ImageSerializer

class ImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = RelationSerializer


class ImageFileCreate(generics.CreateAPIView):
    serializer_class = ImageFileSerializer
    parser_classes = (MultiPartParser, JSONParser,)

class ImageFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageFileSerializer


class OtherFileCreate(generics.CreateAPIView):
    serializer_class = OtherFileSerializer
    parser_classes = (MultiPartParser, JSONParser,)

class OtherFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = OtherFileSerializer
