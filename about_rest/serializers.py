from rest_framework import serializers
from .models import Notice, News


class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
