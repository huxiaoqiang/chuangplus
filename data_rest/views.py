# encoding:utf-8

from django.contrib.auth.models import User
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserinfoSerializer, ProjectSerializer
from .models import Userinfo, Project


@api_view(['POST', 'PUT'])
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
        return Response({"detail": "用户不存在。"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        userinfo = Userinfo.objects.get(user=user)
    except Userinfo.DoesNotExist:
        return Response({"detail": "用户尚未填写资料。"}, status=status.HTTP_400_BAD_REQUEST)

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
