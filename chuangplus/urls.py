from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'aips.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^api/captcha/', include('captcha_rest.urls')),
    url(r'^api/account/', include('account_rest.urls')),
    url(r'^api/data/', include('data_rest.urls')),

    url(r'^.*$', 'app.views.index'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
