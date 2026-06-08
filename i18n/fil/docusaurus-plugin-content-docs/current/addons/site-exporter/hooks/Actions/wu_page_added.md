---
id: wu_page_added
title: Aksyon - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Pinapayagan nito ang mga developer ng plugin na magpatakbo ng karagdagang aksyon kapag nairehistro ang mga pahina.

Hindi tulad ng `wu_page_load`, na tumatakbo lang kapag nakikita ang isang partikular na pahina, ang hook na ito ay tumatakbo sa pagrehistro para sa bawat pahina ng admin na idinadagdag gamit ang WP Ultimo code.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID ng pahinang ito. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang hook na nabuo para sa pahinang ito. |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
