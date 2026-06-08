---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

ಒಂದು ನಿರ್ದಿಷ್ಟ ಪುಟವನ್ನು ರೆಂಡರ್ (render) ಮಾಡುವ ಮೊದಲು ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

ಬಳಕೆ: ಈ ಡೈನಾಮಿಕ್ ಭಾಗವನ್ನು (dynamic part) ಸರಿಯಾದ page id ಯೊಂದಿಗೆ ಬದಲಾಯಿಸಬೇಕು. ಉದಾಹರಣೆಗೆ: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಪುಟದ ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ನ ಇನ್‌ಸ್ಟೆನ್ಸ್ (instance). |

### Since

- 1.8.2
### Source

ಇದನ್ನು [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ನಲ್ಲಿ 368ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
