from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('a-propos/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    # Le lien vers la vue corrigée
    path('article/<slug:slug>/', views.detail_article, name='detail_article'),
    
    path('search/', views.blog_search, name='blog_search'),
    path('blog/', views.blog_list, name='blog_list'),
]