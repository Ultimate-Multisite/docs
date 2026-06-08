---
id: get_blogs_of_user
title: Filtre - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtre: get_blogs_of_user

Aquí teniu el filtre original de WP per referència, per estar segur.

Filtra la llista de sites dels quals pertany un usuari.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| $sites | `object[]` | Un array d'objects de sites que pertanyen al usuari. |
| $user_id | `int` | ID de l'usuari. |
| $all | `bool` | Si el resultat (l'array de sites retornat) ha de contenir tots els sites, inclosos aquells marcats com 'deleted', 'archived' o 'spam'. Valor per defecte: false. |

### Des de

- 2.0.11
### Font

Definit en [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) a la línia 851
