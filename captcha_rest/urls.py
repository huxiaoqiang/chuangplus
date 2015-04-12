from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.image, name='image'),
    url(r'^check/$', views.check, name='check'),
]
