---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Omogućava developerima pluginova da dodaju dodatne hook-ove na naše stranice.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ove stranice. |
| $page_hook | `string` | Page hook ove stranice. |
| $admin_page | `self` | Instanca stranice. |

### Od

- 1.8.2
- 2.0.4: Dodan je treći parametar: instanca stranice.
### Izvor

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) na liniji 332
