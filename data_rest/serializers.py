from rest_framework import serializers
from .models import Userinfo, Project, Member, Post, Relation, Image, ImageFile, OtherFile


class UserinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        exclude = ('user',)


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post

class RelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relation

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image

class ImageFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageFile

class OtherFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherFile
