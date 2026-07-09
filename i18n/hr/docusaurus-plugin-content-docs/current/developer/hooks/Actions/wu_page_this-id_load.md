---
id: wu_page_this-id_load
title: 'Radnja - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Dopustite developerima pluginova da dodaju dodatne hookove na naše stranice.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ove stranice. |
| $page_hook | `string` | Hook stranice ove stranice. |
| $admin_page | `self` | Instanca stranice. |

### Od {#since}

- 1.8.2
- 2.0.4: Dodan treći parametar: instanca stranice.
### Izvor {#source}

Definirano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) u retku 332
