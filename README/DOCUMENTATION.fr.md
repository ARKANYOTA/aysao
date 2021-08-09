# DOCUMENTATION

## Serveur
<details>
<summary>Protocole</summary>

| Id  | Taille | Title | Description |
| --- | --- | --- | --- |
| 0x00 | 1 bytes | Version du protocole | Byte null pour le protocole version 0 |
| 0x01 | 1 bytes | Ping | Envoyée Périodiquement pour savoir si le joueur est toujours connecter |
| 0x02 | 16 bytes | Infos | Infos a donner au joueurs tels que La taille de la map, position du joueur|
| 0x03 | Sizex* Sizey bytes | Map | String des données de la map |
| 0x04 | 16bytes | Modification Serveur | Toutes les infos des autres joueurs |
| 0x05 | 16bytes | Nouveau AUtre Joueurs | Notifie q'un nouveau joueur arrive |
| 0x08 | 16bytes | Deconextion Autre Joueurs | Notifie q'un nouveau joueur se deconecte |
| 0x06 | 16bytes | teleporte de force le joueur | Teleporte le joueurs à un autre endroit |
| 0x09 | 16bytes | Message dans le chat | Nouveau message dans le chat |
</details>

### Base et vague

Lis le fichier du serveur à jouer et le met en memoire
Fais une sauvegarde du jeu toutes les 3minutes dans le fichier serveur

## Client
<details>
<summary>Protocole</summary>

| Id  | Taille | Title | Description |
| --- | --- | --- | --- |
| 0x00 | 1 bytes | Version du protocole | Byte null pour le protocole version 0 |
| 0x01 | 1 bytes | Ping | Envoyée Périodiquement pour savoir si le joueur est toujours connecter |
| 0x02 | 16 bytes | Infos | Infos a donner au joueurs tels que La taille de la map, position du joueur|
| 0x03 | Sizex* Sizey bytes | Map | String des données de la map |
| 0x04 | 16bytes | Modification Serveur | Toutes les infos des autres joueurs |
| 0x05 | 16bytes | Nouveau AUtre Joueurs | Notifie q'un nouveau joueur arrive |
| 0x08 | 16bytes | Deconextion Autre Joueurs | Notifie q'un nouveau joueur se deconecte |
| 0x06 | 16bytes | teleporte de force le joueur | Teleporte le joueurs à un autre endroit |
| 0x09 | 16bytes | Message dans le chat | Nouveau message dans le chat |
</details>
