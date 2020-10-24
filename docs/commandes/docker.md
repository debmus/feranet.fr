# Commandes : Docker

## Installer sur debian
[Documentation officiel](https://docs.docker.com/engine/install/debian/)

## Télécharger et éxécuter une image
```bash
# Télécharger une image ou la mettre à jour
docker pull debian
# Executer et démarrer une image
docker run debian
```

## Commande d'éxecution plus complète
```docker
# Donner un nom au conteneur
--name
# Supprimer le container apres chaque utilisation
--rm
# Détacher le container
-d
# Nat le port 8080 de l'hote sur le 80 du conteneur
-p 8080:80
# Afficher le retour du conteneur et permet une interface avec lui
-ti
# Affecter une varible à appliquer
NAME=
# Monter le dossier /var/www/html de l'hôte vers le dossier /var/lib/debian du conteneur avec les bon droits :
-v /var/www/html:/var/lib/debian:ro
# Éxecuter la commande bash
bash
# Nom de l'hôte :
-h 

# Exemple
docker run -d --name my_debian --rm -p 8080:80 -ti -e NAME=debian_variable -v /var/www/html:/var/lib/debian:ro -h toto debian bash
```

## Modification sur les containers
```bash
# Se rattacher à un conteneur sans le fermer avec un <kbd>Ctrl</kbd> + <kbd>c</kbd>
docker attach --sig-proxy=false my_debian
# Se connecter à un conteneur
docker exec -ti my_debian bash
# Lier le conteneur phpServeur avec apache2 et lancé un terminal
docker run -it --link phpServeur:phpServeur httpd bash
```

## Démarrer / Arrêter
```bash
# Démarrer un conteneur
docker start my_debian
# Arrêter un conteneur
docker stop my_debian
```

## Information
```bash
# Afficher les processus
docker ps -a

# Afficher les images
docker images -a

# Stats docker en temps réél
docker stats
```

## Suppression
```bash
# Supprimer les conteneurs
docker rm $(docker ps -a -q)

# Supprimer les images
docker rmi -f $(docker images -a -q)

# Supprimer les images non taggées
docker rmi $(docker images -q -f "dangling=true")

# Supprimer les images, les conteneurs arrêtées, les réseaux inutilisées et construit le cache
docker system prune
```
