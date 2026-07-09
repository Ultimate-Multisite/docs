---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

ಪ್ಲಗ್ಇನ್ developers ಗಳಿಗೆ ನಿರ್ದಿಷ್ಟ ಪುಟಕ್ಕೆ ಹೆಚ್ಚುವರಿ hooks ಸೇರಿಸಲು ಇದು ಅವಕಾಶ ನೀಡುತ್ತದೆ.

Usage: ಡೈನಾಮಿಕ್ ಭಾಗವನ್ನು (dynamic part) ಮಾನ್ಯವಾದ page id ಯೊಂದಿಗೆ ಬದಲಾಯಿಸಬೇಕು, ಉದಾಹರಣೆಗೆ: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಈ ಪುಟದ ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಈ ಪುಟಕ್ಕೆ ರಚಿಸಲಾದ hook. |

### Since {#since}

- 1.8.2
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
