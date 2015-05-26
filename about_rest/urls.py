from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^notices/$', views.NoticeList.as_view()),
    url(r'^notice/(?P<pk>[0-9]+)/$', views.NoticeDetail.as_view()),

    url(r'^news/$', views.NewsList.as_view()),
    url(r'^news/(?P<pk>[0-9]+)/$', views.NewsDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
