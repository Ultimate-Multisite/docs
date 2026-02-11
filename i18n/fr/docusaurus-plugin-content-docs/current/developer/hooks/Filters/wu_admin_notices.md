---
id: wu_admin_notices
title: Filtre - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

Permettre aux développeurs de filtrer les avis d'administration ajoutés par Ultimate Multisite.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $notices | `array` | Liste des avis pour ce panneau particulier. |
| $all_notices | `array` | Liste des avis ajoutés, segmentés par panneau. |
| $panel | `string` | Panneau pour récupérer les avis. |
| $filter | `string` | Si les avis dismissable ont été filtrés. |
| $dismissed_messages | `array` | Liste des clés d'avis dismissées. |

### Since

- 2.0.0

### Source

Défini dans [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) à la ligne 121


## Returns
