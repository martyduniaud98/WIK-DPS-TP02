# Api DevOps

Api DevOps est une application Node.js qui écoute sur un port spécifique et renvoie les en-têtes HTTP lorsqu'une requête GET est effectuée sur l'URL `/ping`.

## Lancement de l'application

```bash
$ cd ~/api_devops
$ node build/index.js
```

Par défaut, le port 2000 sera utilisé si aucune valeur n'est spécifiée. Sinon on peut utiliser la variable d'environnement `PING_LISTEN_PORT=[port]` pour spécifier le port d'écoute.
Exemple :

```bash
$ export PING_LISTEN_PORT=4000
$ node build/index.js
```
