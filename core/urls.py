"""
URL configuration for core project.
"""
from django.contrib import admin
from django.urls import path, include # <-- Ajout de include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.models import User

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Au lieu de lier seulement 'home', on lie TOUTES les urls de l'app blog
    path('', include('blog.urls')), 
]

# Servir les fichiers médias pendant le développement
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
    
try:
    if not User.objects.filter(username='admin').exists():
        # ICI : mets ton nom d'utilisateur, ton mail et ton mot de passe choisi
        User.objects.create_superuser('admin', 'darijosephda@gmail.com', 'Joseph2026!')
        print("Superutilisateur créé avec succès !")
except Exception as e:
    print(f"Erreur lors de la création de l'admin : {e}")