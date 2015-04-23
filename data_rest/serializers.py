from rest_framework import serializers
from .models import Userinfo, Project


class UserinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        exclude = ('user',)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
