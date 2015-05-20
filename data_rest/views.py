# encoding:utf-8

from django.contrib.auth.models import User
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from .serializers import UserinfoSerializer, ProjectSerializer, MemberSerializer, PostSerializer, RelationSerializer, ImageSerializer, ImageFileSerializer, OtherFileSerializer
from .models import Userinfo, Project, Member, Post, Relation, Image


@api_view(['POST', 'PUT'])
@permission_classes((IsAuthenticated, ))
def userinfo_create_or_update(request):
    try:
        userinfo = Userinfo.objects.get(user=request.user)

    except Userinfo.DoesNotExist:
        serialized = UserinfoSerializer(data=request.DATA)

        if serialized.is_valid():
            serialized.save(user=request.user)
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)

    serialized = UserinfoSerializer(userinfo, data=request.DATA)

    if serialized.is_valid():
        serialized.save(user=request.user)
        return Response(serialized.data, status=status.HTTP_202_ACCEPTED)
    else:
        return Response(serialized.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def userinfo_retrieve(request, username):
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response({"username": "用户不存在。"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        userinfo = Userinfo.objects.get(user=user)
    except Userinfo.DoesNotExist:
        return Response({"username": "用户尚未填写资料。"}, status=status.HTTP_400_BAD_REQUEST)

    serialized = UserinfoSerializer(userinfo)
    return Response(serialized.data)

class ProjectList(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Project.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Project.objects.all()

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class MemberList(generics.ListCreateAPIView):
    serializer_class = MemberSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Member.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Member.objects.all()

class MemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Post.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Post.objects.all()

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class RelationList(generics.ListCreateAPIView):
    serializer_class = RelationSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Relation.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Relation.objects.all()

class RelationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Relation.objects.all()
    serializer_class = RelationSerializer

class ImageList(generics.ListCreateAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Image.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Image.objects.all()

class ImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = RelationSerializer


class ImageFileList(generics.ListCreateAPIView):
    serializer_class = ImageFileSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Image.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Image.objects.all()

class ImageFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageFileSerializer


class OtherFileList(generics.ListCreateAPIView):
    serializer_class = OtherFileSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Image.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Image.objects.all()

class OtherFileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = OtherFileSerializer
