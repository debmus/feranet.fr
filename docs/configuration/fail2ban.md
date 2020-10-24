# Configuration : Fail2ban
 
## Installation sur Debian
```bash
apt install fail2ban
```

## Configuration
1. Copier Le fichier de configuration pour éviter qu'il ne soit écrasé lors d'une mise à jour
```bash
cd /etc/fail2ban
cp jail.conf jail.local
```

2. Modification du fichier `jail.local`
```bash
# Liste d'adresses IP, ou d'hôtes DNS ignoré
ignoreip = 127.0.0.1/8 ::1

# Temps de banissement
bantime  = 2h

# Temp entre chaques échecs
findtime  = 20m

# Nombre d'échecs avant un bannissement
maxretry = 6
```

3. Pour activer les prisons, créer un fichier `jail-d.conf` dans le dossier `/etc/fail2ban/jail.d` et ajouter le nom de la prison avec la valeur `"True"`. 
Exemple avec les prisons **ssh** et **apache2**
```bash
[sshd]
port = 2222
enabled = true

[apache-auth]
enabled = true
```

## Listes des Commandes
```bash
# Afficher le status des prisons actives
fail2ban-client status

# Afficher le status d'une prison active
fail2ban-client status sshd

# Débannir une adresse IP
fail2ban-client unban 1.2.3.4

# Débannir une adresse IP d'un service
fail2ban-client set sshd unban 1.2.3.4
```