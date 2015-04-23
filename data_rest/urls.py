from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^userinfo/(?P<username>.+)/$', views.userinfo_retrieve),
    url(r'^userinfo/createorupdate/$', views.userinfo_create_or_update),

    url(r'^project/$', views.ProjectList.as_view()),
    url(r'^project/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
