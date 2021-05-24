from . import views
from django.urls import path
from django.conf.urls import url

app_name = 'news'

urlpatterns = [
    path('articles/', views.news_list, name='real_news_list'),
]