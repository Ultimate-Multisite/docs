---
id: wu_country_get_states
title: Filtre - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtre : wu_country_get_states

Renvoie la liste des états pour ce pays.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | Liste des états au format XX => Nom. |
| $country_code | `string` | Code ISO à deux lettres pour le pays. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance de la classe actuelle. |

### Depuis

- 2.0.11

### Source

Défini dans [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) à la ligne 86

## Renvoie

La liste filtrée des états.
