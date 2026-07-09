---
id: wu_page_load
title: Aksyon - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Aksyon: wu_page_load {#action-wupageload}

Tugoti ang mga developer sa plugin nga makadugang og dugang nga mga hook sa among mga panid.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $id | `string` | Ang ID niining panida. |
| $page_hook | `string` | Ang page hook niining panida. |
| $admin_page | `self` | Ang page instance. |

### Sukad {#since}

- 1.8.2
- 2.0.4: Gidugang ang ikatulong parameter: ang page instance.
### Gigikanan {#source}

Gidefine sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) sa linya 318
