from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'fproject.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^fl/$', 'flowchart.views.index'),

    url(r'^fl/index1/$', 'flowchart.views.index1'),

    url(r'^get_numbers/$', 'flowchart.views.numbers'),
    url(r'^admin/', include(admin.site.urls)),
)
