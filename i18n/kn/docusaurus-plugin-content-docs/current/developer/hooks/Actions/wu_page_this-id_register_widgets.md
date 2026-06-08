---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

ಈ ಪುಟಕ್ಕಾಗಿ ವಿಜೆಟ್‌ಗಳನ್ನು ನೋಂದಾಯಿಸಿದ ನಂತರ (registered) ಇದು ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

ಹುಕ್ (hook) ಹೆಸರಿನ ಡೈನಾಮಿಕ್ ಭಾಗವಾದ, `$this->id`, ಎಂಬುದು ಪುಟದ ಐಡಿ (page id) ಅನ್ನು ಸೂಚಿಸುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ಪುಟದ ಐಡಿ (page id). |
| $page_hook | `string` | ಪುಟದ ಹುಕ್ (page hook). |
| $page | `object` | ಪುಟದ ಆಬ್ಜೆಕ್ಟ್ (page object). |

### Since

- 2.4.10
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ನಲ್ಲಿ 755ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
