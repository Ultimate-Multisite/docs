---
id: wu_country_get_cities
title: Filtre - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Renvoie la liste des villes pour un état dans un pays.

## Parameters {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $cities | `array` | Liste des noms de villes de l'état. Aucun clé n'est présente. |
| $country_code | `string` | Code ISO à deux lettres pour le pays. |
| $state_code | `string` | Code ISO à deux lettres pour l'état. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance de la classe actuelle. |

### Depuis {#since}

- 2.0.11

### Source {#source}

Défini dans [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) à la ligne 146


## Renvoie {#returns}
La liste filtrée des états.
