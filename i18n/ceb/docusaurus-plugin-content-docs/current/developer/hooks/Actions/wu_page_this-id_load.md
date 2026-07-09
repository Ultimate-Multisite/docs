---
id: wu_page_this-id_load
title: 'Aksyon - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Tugoti ang mga tigpalambo og plugin nga makadugang og dugang nga hooks sa among mga panid.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $id | `string` | Ang ID niini nga panid. |
| $page_hook | `string` | Ang page hook niini nga panid. |
| $admin_page | `self` | Ang instance sa panid. |

### Sukad {#since}

- 1.8.2
- 2.0.4: Gidugang ang ikatulong parameter: ang instance sa panid.
### Tinubdan {#source}

Gihubit sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) sa linya 332
