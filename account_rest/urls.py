from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
#from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^register/$', views.register, name='register'),
    url(r'^checkusername/$', views.check_username, name='check_username'),
    url(r'^login/', obtain_auth_token),

    url(r'^userinfo/createorupdate/$', views.userinfo_create_or_update),
    url(r'^userinfo/(?P<username>.+)/$', views.userinfo_retrieve),
]

#urlpatterns = format_suffix_patterns(urlpatterns)
