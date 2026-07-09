---
id: wu_admin_notices
title: Filtre - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtre : wu_admin_notices

Permet aux développeurs de filtrer les notifications d’administration ajoutées par Ultimate Multisite.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $notices | `array` | List of notices for that particular panel. |
| $all_notices | `array` | List of notices added, segregated by panel. |
| $panel | `string` | Panel to retrieve the notices. |
| $filter | `string` | If the dismissable notices have been filtered out. |
| $dismissed_messages | `array` | List of dismissed notice keys. |

### Depuis

- 2.0.0
### Source

Défini dans [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) à la ligne 121


## Retours
