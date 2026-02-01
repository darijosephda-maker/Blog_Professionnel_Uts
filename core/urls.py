"""
URL configuration for core project.
"""

from django.contrib import admin
from django.urls import path, include, re_path # On ajoute re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve # Indispensable pour la production
from django.contrib.auth.models import User

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')), 
]

# Cette partie s'occupe de servir les fichiers en TOUTES circonstances sur Render
urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]

# Ton script de création d'admin (à supprimer plus tard pour la sécurité)
try:
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'darijosephda@gmail.com', 'Joseph2026!')
        print("Superutilisateur créé avec succès !")
except Exception as e:
    print(f"Erreur lors de la création de l'admin : {e}")