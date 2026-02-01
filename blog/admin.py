from django.contrib import admin
from .models import Profil, Article, Contact

# Enregistrement du Profil
@admin.register(Profil)
class ProfilAdmin(admin.ModelAdmin):
    list_display = ('nom', 'metier')

# Enregistrement des Articles de Blog
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('titre', 'date_publication')
    prepopulated_fields = {'slug': ('titre',)} # Génère le slug automatiquement depuis le titre

# Enregistrement des Messages de Contact
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('nom', 'email', 'date_envoi')
    readonly_fields = ('date_envoi',) # Empêche la modification de la date