# Commandes : SSH

## Se connecter à une machine distante
```bash
# Sur le port 22
ssh root@1.2.3.4

# Sur le port 5678
ssh -p 5678 root@1.2.3.4
```

## Se connecter sans mot de passe
```bash
# Génération d'une clé

# -o : Sauvegarde la clé dans le nouveau format openssh
# -a : Nombre de tour de fonction de dérivation des clés
# -t : Spécifier le type de clé qu’on créé.
# -f : Répertoire de sortie de la clé
# -C : Ajouter un commentaire à la clé

ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "email@example.com"

# Envoie de la clé à la machine distante
ssh-copy-id -i .ssh/id_ed25519.pub root@1.2.3.4
```

## Envoyé un fichier du client vers le serveur
```bash
scp fichier.sh root@1.2.3.4:/home/toto

# Sur le port 5678
scp -P 5678 fichier.sh root@1.2.3.4:/home/toto

# Envoyer un dossier
scp -r dossier root@1.2.3.4:/home/toto
```

## Envoyé un fichier du serveur vers le client
```bash
scp root@1.2.3.4:fichier.sh /home/toto

# Sur le port 5678
scp -P 5678 root@1.2.3.4:fichier.sh /home/toto

# Envoyer un dossier
scp -r root@1.2.3.4:dossier /home/toto
```

## Executer une commande
```bash
scp root@1.2.3.4 'df -h'

# Sur le port 5678
scp -P 5678 root@1.2.3.4 'df -h'
```

## Executer un script
```bash
scp root@1.2.3.4 './scripts.sh'

# Sur le port 5678
scp -P 5678 root@1.2.3.4 './scripts.sh'
```

## Executer une function à l'intérieur d'un script
```bash
scp root@1.2.3.4 "$(declare -f fonction_creation); fonction_creation" > /dev/null 2>&1

# Sur le port 5678
scp -P 5678 root@1.2.3.4 "$(declare -f fonction_creation); fonction_creation" > /dev/null 2>&1
```

## Autres commandes utiles
```bash
# Tester votre configuration et la débug
sshd -T

# Liste les ciphers disponible sur votre serveur
ssh -Q cipher

# Liste les ciphers d’authentification
ssh -Q cipher-auth

# Liste les MAC
ssh -Q mac

# Liste les algorithmes
ssh -Q kex

# Liste les clé
ssh -Q key
```