from django.shortcuts import render, get_object_or_404, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from .models import Article, Profil
from django.shortcuts import render
from django.db.models import Q

# 1. Page d'accueil (Articles)
def home(request):
    articles = Article.objects.all().order_by('-date_publication')
    profil = Profil.objects.first()
    return render(request, 'accueil.html', {
        'articles': articles, 
        'profil': profil
    })

# 2. Page de détail d'un article
def detail_article(request, slug):
    article = get_object_or_404(Article, slug=slug)
    profil = Profil.objects.first()
    return render(request, 'blog/detail.html', {
        'article': article, 
        'profil': profil
    })

# 3. Page À Propos
def about(request):
    profil = Profil.objects.first()
    return render(request, 'propos.html', {'profil': profil})

# 4. Page Services
def services(request):
    profil = Profil.objects.first()
    return render(request, 'services.html', {'profil': profil})

# 5. Page Contact avec envoi d'email réel
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
# Importe ton modèle Profil si ce n'est pas déjà fait
# from .models import Profil 

"""def contact(request):
    profil = Profil.objects.first()
    
    if request.method == 'POST':
        nom = request.POST.get('nom')
        email_client = request.POST.get('email')
        sujet = request.POST.get('sujet')
        message_contenu = request.POST.get('message')

        # Préparation du contenu de l'email
        sujet_mail = f"Nouveau contact de {nom} : {sujet}"
        corps_mail = f"Message reçu de : {nom} <{email_client}>\n\nContenu :\n{message_contenu}"

        try:
            send_mail(
                sujet_mail,
                corps_mail,
                settings.EMAIL_HOST_USER, # Ton adresse Gmail (expéditeur technique)
                [settings.EMAIL_HOST_USER], # Ton adresse Gmail (destinataire final)
                fail_silently=False,
            )
            # MISE À JOUR : Message personnalisé avec le nom du visiteur
            messages.success(request, f"Super {nom} ! Ton message a été envoyé avec succès.")
            return redirect('contact')
            
        except Exception as e:
            # En cas d'erreur, on affiche l'erreur technique dans la console pour toi
            print(f"Erreur SMTP : {e}")
            messages.error(request, "Mince, une erreur est survenue lors de l'envoi. Vérifie ta connexion ou tes réglages Gmail.")
    
    return render(request, 'contact.html', {'profil': profil})"""
    
def contact(request):
    # On récupère les informations de ton profil pour les afficher sur la page
    profil = Profil.objects.first()
    
    # PLUS BESOIN de gérer le POST ici car le formulaire 
    # envoie les données directement à https://formspree.io/f/maqblnng
    
    return render(request, 'contact.html', {'profil': profil})



def blog_search(request):
    query = request.GET.get('q', '').strip()
    results = Article.objects.none()
    
    if query:
        # On utilise 'titre' et 'contenu' (noms de ton modèle)
        results = Article.objects.filter(
            Q(titre__icontains=query) | Q(contenu__icontains=query)
        ).distinct()
    
    # Rappel : Pas de "/" au début de 'search_results.html'
    return render(request, 'search_results.html', {
        'query': query,
        'results': results
    })