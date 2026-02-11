---
id: get_blogs_of_user
title: Filtre - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtre: get_blogs_of_user

Reproduit le filtre WP original ici, pour être sûr.

Filtre la liste des sites auxquels un utilisateur appartient.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Un tableau d'objets de site appartenant à l'utilisateur. |
| $user_id | `int` | ID utilisateur. |
| $all | `bool` | Si le tableau de sites retourné doit contenir tous les sites, y compris ceux marqués 'deleted', 'archived' ou 'spam'. Valeur par défaut : false. |

### Depuis

- 2.0.11

### Source

Défini dans [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) à la ligne 851
