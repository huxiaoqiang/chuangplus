from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Userinfo


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class UserinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        exclude = ('user',)
