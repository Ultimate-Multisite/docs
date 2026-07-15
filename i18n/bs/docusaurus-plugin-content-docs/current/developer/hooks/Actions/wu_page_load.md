---
id: wu_page_load
title: Akcija - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Akcija: wu_page_load

Omogućava developerima pluginova da dodaju dodatne hook-ove na naše stranice.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID ove stranice. |
| $page_hook | `string` | Hook stranice. |
| $admin_page | `self` | Instanca stranice. |

### Od {#since}

- 1.8.2
- 2.0.4: Dodan je treći parametar: instanca stranice.
### Izvor {#source}

Definisano je u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) na liniji 318
