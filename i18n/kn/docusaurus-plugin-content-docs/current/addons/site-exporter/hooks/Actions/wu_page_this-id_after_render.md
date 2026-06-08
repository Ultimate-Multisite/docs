---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

ಯಾವ ನಿರ್ದಿಷ್ಟ ಪುಟವನ್ನು ರೆಂಡರ್ (render) ಮಾಡಿದ ನಂತರ ಇದು ಕಾರ್ಯಗತಗೊಳ್ಳುತ್ತದೆ.

**ಬಳಕೆ ವಿಧಾನ (Usage):** ಇಲ್ಲಿರುವ ಡೈನಾಮಿಕ್ ಭಾಗವನ್ನು (dynamic part) ಸರಿಯಾದ page id ಯೊಂದಿಗೆ ಬದಲಾಯಿಸಬೇಕು. ಉದಾಹರಣೆಗೆ: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ಪುಟದ ID. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ನ ಇನ್‌ಸ್ಟೆನ್ಸ್ (instance). |

### Since

- 1.8.2
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ನಲ್ಲಿ ಲೈನ್ 394 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
