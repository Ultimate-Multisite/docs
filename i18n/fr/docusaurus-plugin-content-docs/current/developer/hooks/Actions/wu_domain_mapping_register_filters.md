---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Certains plugins enregistreront l'URL avant que la cartographie ne soit active ou construiront les URL d'une manière différente qui n'est pas incluse dans les filtres ci-dessus.

Dans de tels cas, nous voulons ajouter des filtres supplémentaires. Le deuxième paramètre passé est le rappel `mangle_url`. Nous déconseillons d'utiliser ce filtre directement. À la place, utilisez la méthode `Domain_Mapping::apply_mapping_to_url`.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Le callable de mangle. |
| $domain_mapper | `self` | Cet objet. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) à la ligne 530
