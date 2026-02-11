---
id: wu_rest_create_item
title: Filtre - wu_rest_create_item
sidebar_label: wu_rest_create_item
_i18n_hash: b35924a8414367a9d0c2f3c21f1a1b91
---
# Filtre : wu_rest_create_item

Filtre pour déterminer si la requête peut être traitée ou non.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $allowed | `bool` | Valeur de retour initiale. |
| $rest_base | `array` | Slug de l'entité. |
| $this | `\Base_Manager` | L'instance de l'objet. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L362) à la ligne 362
