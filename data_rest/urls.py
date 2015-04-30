from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^userinfo/createorupdate/$', views.userinfo_create_or_update),
    url(r'^userinfo/(?P<username>.+)/$', views.userinfo_retrieve),

    url(r'^project/$', views.ProjectList.as_view()),
    url(r'^project/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),

    url(r'^member/$', views.MemberList.as_view()),
    url(r'^member/(?P<pk>[0-9]+)/$', views.MemberDetail.as_view()),

    url(r'^post/$', views.PostList.as_view()),
    url(r'^post/(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),

    url(r'^relation/$', views.RelationList.as_view()),
    url(r'^relation/(?P<pk>[0-9]+)/$', views.RelationDetail.as_view()),

    url(r'^image/$', views.ImageList.as_view()),
    url(r'^image/(?P<pk>[0-9]+)/$', views.ImageDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
