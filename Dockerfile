# Utilise une image Python stable
FROM python:3.10-slim


# Empêche Python de générer des fichiers .pyc et force l'affichage des logs
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Définit le dossier de travail
WORKDIR /app

# Installe les dépendances système nécessaires pour psycopg2 (Postgres)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Installe les dépendances Python
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copie tout le projet dans le conteneur
COPY . /app/

# Commande pour préparer les fichiers statiques (ton JS et CSS !)
RUN python manage.py collectstatic --noinput

# Expose le port utilisé par Render
EXPOSE 8000

# Lance l'application avec Gunicorn
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]

