from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    #url(r'^userinfo/(?P<pk>[0-9]+)/$', views.UserinfoDetail.as_view()),
    url(r'^userinfocreateorupdate/$', views.userinfo_create_or_update),
]

urlpatterns = format_suffix_patterns(urlpatterns)
