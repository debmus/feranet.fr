# Supprimer les bloatware et trackers sur Windows 10

## Privatzilla
1. Privatezilla est le moyen le plus simple d'effectuer un contrôle rapide de la confidentialité et de la sécurité de Windows 10 [privatezilla](https://github.com/builtbybel/privatezilla/releases)

## Bloatware
1. Pour supprimer les logiciels préinstallés sur Windows 10, télécharger le script PowerShell [Windows10Debloater](https://github.com/Sycnex/Windows10Debloater)
2. Lancer PowerShell avec les droits administrateur
3. Activer l'éxécution des scripts PowerShell
```powershell
Set-ExecutionPolicy Unrestricted -Force
```

4. Exécuter le script
```powershell
.\Windows10DebloaterGUI.ps1
```
![windows10debloater.png](/assets/images/windows10debloater.png)

## Trackers
1. Pour désactiver le Pistage sur Windows 10, télécharger le logiciel [O&O ShutUp10](https://www.oo-software.com/fr/shutup10)
2. Dans l'onglet `Actions`, sélectionner : `Appliquer tous les paramètres recommandés et plutôt recommandés`
3. Redémarrer Windows. A chaque mise à jour de Windows, il faudra penser à revérifier certaines règles qui aurait pu être réactivées.
![oetoshutup10.png](/assets/images/oetoshutup10.png)