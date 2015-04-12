from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer


@api_view(['POST'])
def register(request):
    VALID_USER_FIELDS = [f.name for f in User._meta.fields]
    serialized = UserSerializer(data=request.DATA)

    if request.session['captcha'] != request.data['captcha']:
        return Response('Wrong Captcha.', status=status.HTTP_400_BAD_REQUEST)

    if serialized.is_valid():
        user_data = {field: data for (field, data) in request.data.items() if field in VALID_USER_FIELDS}
        user = User.objects.create_user(**user_data)
        return Response(UserSerializer(instance=user).data, status=status.HTTP_201_CREATED)
    
    return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
