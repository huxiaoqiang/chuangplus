from rest_framework import serializers
from .models import Userinfo, Image, ImageFile, OtherFile


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image

class ImageFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageFile

class OtherFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherFile
