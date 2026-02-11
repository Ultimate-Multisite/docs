---
id: get_blogs_of_user
title: Filtro - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtro: get_blogs_of_user

Replica qui il filtro WP originale, per sicurezza.

Filtra l'elenco dei siti a cui l'utente appartiene.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $sites | `object[]` | Un array di oggetti sito appartenenti all'utente. |
| $user_id | `int` | ID utente. |
| $all | `bool` | Se l'array di siti restituito dovrebbe contenere tutti i siti, inclusi quelli contrassegnati come 'deleted', 'archived' o 'spam'. Default false. |

### Versione

- 2.0.11

### Fonte

Definito in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) alla riga 851
