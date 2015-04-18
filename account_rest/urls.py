from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token

from . import views


urlpatterns = [
    url(r'^register/$', views.register, name='register'),
    url(r'^login/', obtain_auth_token),
]
