---
id: get_site_url_for_previewer
title: Filtre - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtre : get_site_url_for_previewer

Permet aux développeurs de plugins de filtrer l'URL utilisée dans le visualiseur

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $domain | `string` | Domaine par défaut actuellement utilisé, utile pour les manipulations |
| $domain_options | `array` | Liste de toutes les options de domaine saisies dans les paramètres Ultimate Multisite -> Réglages du réseau -> Options de domaine |

### Depuis

- 1.7.2

### Source

Défini dans [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) à la ligne 812

## Retourne
Nouveau domaine à utiliser
