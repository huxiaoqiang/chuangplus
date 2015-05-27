# -*- coding: utf-8 -*-
from django.shortcuts import redirect
from django.core.urlresolvers import reverse_lazy
from django.db.models import Q
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Project, Member, Post, Relation
from .serializers import ProjectSerializer, MemberSerializer, PostSerializer, RelationSerializer
from account_rest.models import Userinfo


class ProjectList(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        if self.request.method == 'GET' and 'filter' in self.request.GET:
            return Project.objects.filter(**eval(self.request.GET['filter']))
        else:
            return Project.objects.all()

def projectfilterbyuser(request, username, type):
    project_ids = [relation.project.id for relation in Relation.objects.filter(username=username, type=type)]
    print(project_ids)
    return redirect('%s?filter={"id__in":%s}' % (reverse_lazy('project-list'),project_ids) )

@api_view(['GET'])
def projectinmyfield(request):
    try:
        userinfo = Userinfo.objects.get(user=request.user)
    except Userinfo.DoesNotExist:
        return Response({"detail": "用户尚未填写资料。"}, status=status.HTTP_400_BAD_REQUEST)

    field_list = [x for x in userinfo.field.split(';') if x]
    if len(field_list) == 0:
        queryset = Project.objects.all()
    elif len(field_list) == 1:
        queryset = Project.objects.filter(field__contains=field_list[0])
    elif len(field_list) == 2:
        queryset = Project.objects.filter(Q(field__contains=field_list[0]) | Q(field__contains=field_list[1]))
    elif len(field_list) == 3:
        queryset = Project.objects.filter(Q(field__contains=field_list[0]) | Q(field__contains=field_list[1]) | Q(field__contains=field_list[2]))
    else:
        return Response({"detail": "Too many fields."}, status=status.HTTP_400_BAD_REQUEST)

    serializer = ProjectSerializer(queryset, many=True)
    return Response(serializer.data)

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

