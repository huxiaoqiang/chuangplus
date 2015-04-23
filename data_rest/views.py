from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserinfoSerializer
from .models import Userinfo


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
