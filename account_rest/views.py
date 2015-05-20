# encoding:utf-8

from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import sys
#import MySQLdb
from .serializers import UserSerializer


@api_view(['POST'])
def register(request):
    VALID_USER_FIELDS = [f.name for f in User._meta.fields]
    serialized = UserSerializer(data=request.DATA)

    try:
        session_captcha = request.session.get('captcha', False)
        request_captcha = request.data['captcha']
    except KeyError:
        return Response({'captcha': '请获取并输入验证码。'}, status=status.HTTP_400_BAD_REQUEST)

    if session_captcha.upper() != request_captcha.upper():
        return Response({'captcha': '验证码错误。'}, status=status.HTTP_400_BAD_REQUEST)

    if serialized.is_valid():
        user_data = {field: data for (field, data) in request.data.items() if field in VALID_USER_FIELDS}
        user = User.objects.create_user(**user_data)
        #try:
        #    user = User.objects.create_user(**user_data)
        #except MySQLdb.IntegrityError:
        #    return Response({'email': 'Email 已经注册。'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(UserSerializer(instance=user).data, status=status.HTTP_201_CREATED)

    return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def check_username(request):
    try:
        name = request.data['username']
    except KeyError:
        return Response({'username': '请填写要检查的用户名。'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=name).count() != 0:
        return Response({'exist': 'True'})
    else:
        return Response({'exist': 'False'})
