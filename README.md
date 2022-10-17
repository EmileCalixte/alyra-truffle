# TP Truffle

## Lancement de l'environnement

Lancement de la blockchain ganache dans un container docker configuré à partir du fichier `docker-compose.yml`

```sh
docker compose up
```

Vérification de la version de Truffle

```sh
> docker compose exec truffle truffle version
Truffle v5.6.1 (core: 5.6.1)
Ganache v7.4.4
Solidity v0.5.16 (solc-js)
Node v16.15.1
Web3.js v1.7.4
```

## Déploiement des contrats

```sh
docker compose exec truffle truffle migrate
```

> `$ truffle migrate` est équivalent à lancer `$ truffle compile` puis `$ truffle deploy`

## Etapes

Consulter les [releases](https://github.com/EmileCalixte/alyra-truffle/releases) pour voir les différentes étapes de création et d'utilisation d'un projet Truffle.
