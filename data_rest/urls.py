from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^image/$', views.ImageList.as_view()),
    url(r'^image/(?P<pk>[0-9]+)/$', views.ImageDetail.as_view()),

    url(r'^imagefileupload/$', views.ImageFileCreate.as_view()),
    url(r'^imagefile/(?P<pk>[0-9]+)/$', views.ImageFileDetail.as_view()),

    url(r'^otherfileupload/$', views.OtherFileCreate.as_view()),
    url(r'^otherfile/(?P<pk>[0-9]+)/$', views.OtherFileDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
