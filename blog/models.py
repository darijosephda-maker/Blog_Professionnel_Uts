from django.db import models

class Profil(models.Model):
    nom = models.CharField(max_length=100)
    metier = models.CharField(max_length=150)
    description = models.TextField()
    photo = models.ImageField(upload_to='profil/', blank=True)
    
    def __str__(self):
        return self.nom

class Article(models.Model): # Le modèle qui manquait !
    titre = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=255)
    resume = models.TextField(blank=True)
    contenu = models.TextField()
    date_publication = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='articles/', blank=True)

    def __str__(self):
        return self.titre

class Contact(models.Model): # Pour ta page contact à part
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    date_envoi = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message de {self.nom}"