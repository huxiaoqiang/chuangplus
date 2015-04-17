from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'aips.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^captcha/', include('captcha_rest.urls')),
    url(r'^account/', include('account_rest.urls')),

    url(r'^.*$', 'app.views.index'),
)
