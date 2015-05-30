from rest_framework import serializers
from .models import Project, Member, Post, Relation


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
