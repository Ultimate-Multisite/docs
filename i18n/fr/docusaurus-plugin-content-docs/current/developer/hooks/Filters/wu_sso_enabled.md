---
id: wu_sso_enabled
title: Filtre - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Activer/désactiver la capacité de connexion unique inter-domaines.

Filtrez cette valeur pour désactiver complètement la connexion unique, ou l'activer conditionnellement à la place.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO doit-il être activé ? Vrai pour activé, faux pour désactivé. |

### Since

- 2.0.11

### Source

Défini dans [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) à la ligne 110

## Returns
Si SSO est activé ou non.
