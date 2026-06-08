---
id: wu_page_added
title: ಕ್ರಿಯೆ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

ಪ್ಲಗ್ಇನ್ ಅಭಿವರ್ಧಕರು (plugin developers) ಪುಟಗಳನ್ನು ನೋಂದಾಯಿಸುವಾಗ (register) ಹೆಚ್ಚುವರಿ ಕಾರ್ಯಗಳನ್ನು ನಡೆಸಲು ಇದನ್ನು ಅನುಮತಿಸುತ್ತದೆ.

`wu_page_load` ಗಿಂತ ಭಿನ್ನವಾಗಿ, ಇದು ನಿರ್ದಿಷ್ಟ ಪುಟವನ್ನು ನೋಡುತ್ತಿರುವಾಗ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ. ಬದಲಿಗೆ, WP Ultimo ಕೋಡ್ ಬಳಸಿ ಸೇರಿಸಲಾಗುವ ಪ್ರತಿ ಆಡಳಿತ ಪುಟಕ್ಕೂ (admin page) ನೋಂದಣಿಯ ಸಮಯದಲ್ಲಿ (at registration) ಈ ಹುಕ್ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಈ ಪುಟದ ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಈ ಪುಟಕ್ಕೆ ರಚಿಸಲಾದ ಹುಕ್ (hook). |

### Since

- 2.0.0
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) ನಲ್ಲಿ 203ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
