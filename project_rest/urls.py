from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^projects/$', views.ProjectList.as_view(), name='project-list'),
    url(r'^project/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),
    url(r'^projectsfilterbyusername/(?P<username>.+)/(?P<type>[0-3])/$', views.projectfilterbyuser),
    url(r'^projectsinmyfield/$', views.projectinmyfield),

    url(r'^members/$', views.MemberList.as_view()),
    url(r'^member/(?P<pk>[0-9]+)/$', views.MemberDetail.as_view()),
    #url(r'^membersfilterbyprojectid/(?P<pk>[0-9]+)/$', views.membersfilterbyprojectid),

    url(r'^posts/$', views.PostList.as_view()),
    url(r'^post/(?P<pk>[0-9]+)/$', views.PostDetail.as_view()),
    #url(r'^postsfilterbyprojectid/(?P<pk>[0-9]+)/$', views.membersfilterbyprojectid),

    url(r'^relations/$', views.RelationList.as_view()),
    url(r'^relation/(?P<pk>[0-9]+)/$', views.RelationDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
