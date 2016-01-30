from django.conf.urls import url

from . import views
from . import services

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^start-your-project/', views.startYourProject, name='startYourProject'),
    url(r'^how-it-works/', views.howItWorks, name='howItWorks'),
    url(r'^services/process-quote', services.index, name='index'),
]
