---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Payagan ang mga developer ng plugin na magpatakbo ng mga karagdagang bagay kapag nirerehistro ang mga pahina.

Hindi tulad ng wu_page_load, na tumatakbo lamang kapag tinitingnan ang isang partikular na pahina, tumatakbo ang hook na ito sa pagrerehistro para sa bawat pahina ng admin na idinaragdag gamit ang code ng WP Ultimo.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID ng pahinang ito. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook na nabuo para sa pahinang ito. |

### Mula noong

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) sa linya 203
