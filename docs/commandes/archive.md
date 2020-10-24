# Commandes : tar / zip / rar / 7z

## tar
```bash
# Création
tar cvf archive.tar fichiers/dossiers
tar zcvf archive.tar fichiers/dossiers # gzip

# Extraction
tar xvf archive.tar
tar zxvf archive.tar # gzip
```

## zip
```bash
# Instalaltion sur Debian
apt install zip unzip

# Création
zip archive.zip fichiers
zip -r archive.zip dossiers

# Extraction
unzip archive.zip
```

## rar
```bash
# Instalaltion sur Debian
apt install rar unrar-free

# Création
rar a archive.rar fichiers
rar a -r archive.rar dossiers

# Extraction
unrar x archive.rar
```

## 7z
```bash
# Instalaltion sur Debian
apt install p7zip

# Création
p7zip -k fichiers/dossiers

# Extraction
p7zip -d archive.rar.7z
```