# feranet.fr
Wiki & Outils

Démo : https://feranet.fr

## Instalaltion :
```
git clone https://github.com/debmus/feranet.fr.git

npm install -D vuepress     # https://vuepress.vuejs.org/
npm run dev                 # Version de développement
npm run build               # compilation static -> .docs/.vuepress/dist
```

## Utilisation (docker) :
Contenu de .docs/.vuepress/dist dans feranet.fr
```
cd feranet.fr
curl -L -o docker-compose.yml https://raw.githubusercontent.com/debmus/feranet.fr/main/docker-compose.yml
docker-compose up -d

http://127.0.0.1:8484
```
