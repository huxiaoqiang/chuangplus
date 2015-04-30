from django.conf.urls import patterns, include, url

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
]
