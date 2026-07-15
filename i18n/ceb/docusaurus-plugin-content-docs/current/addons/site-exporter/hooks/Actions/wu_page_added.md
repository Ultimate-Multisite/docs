---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aksyon: wu_page_added

Tugoti ang mga developer sa dugang-programa nga magpadagan og dugang nga mga butang kung narehistro ang mga panid.

Dili sama sa wu_page_load, nga modagan lang kung gitan-aw ang usa ka piho nga panid, kini nga hook modagan sa pagparehistro alang sa matag panid sa admin nga gidugang gamit ang WP Ultimo code.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID niining panid. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook nga gihimo para niining panid. |

### Sukad {#since}

- 2.0.0
### Gigikanan {#source}

Gihubit sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) sa linya 203
