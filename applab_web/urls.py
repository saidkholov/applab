from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^start-your-project/', views.startYourProject, name='startYourProject'),
]