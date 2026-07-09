---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aksyon: wu_page_added {#action-wupageadded}

Tugoti ang mga developer sa plugin nga magpadagan og dugang nga mga butang kung marehistro ang mga panid.

Dili sama sa wu_page_load, nga modagan lang kung ang piho nga panid gitan-aw, kini nga hook modagan sa pagrehistro para sa matag admin nga panid nga gidugang gamit ang code sa Ultimate Multisite.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $page_id | `string` | Ang ID niining panid. |
| $page_hook | `string` | Ang ngalan sa hook niining panid. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gidefine sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) sa linya 228
