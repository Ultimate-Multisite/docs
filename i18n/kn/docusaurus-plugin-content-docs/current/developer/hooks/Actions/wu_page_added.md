---
id: wu_page_added
title: ಕ್ರಿಯೆ - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

plugin developers-ಗಳಿಗೆ ಪುಟಗಳನ್ನು ನೋಂದಾಯಿಸುವಾಗ (registered) ಹೆಚ್ಚುವರಿ ಕಾರ್ಯಗಳನ್ನು ನಡೆಸಲು ಇದು ಅವಕಾಶ ನೀಡುತ್ತದೆ.

wu_page_load ಯಂತಲ್ಲ, ಇದು ನಿರ್ದಿಷ್ಟ ಪುಟವನ್ನು ನೋಡಿದಾಗ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಆದರೆ ಈ hook, Ultimate Multisite ಕೋಡ್ ಬಳಸಿ ಸೇರಿಸಲಾಗುವ ಪ್ರತಿಯೊಂದು admin ಪುಟಕ್ಕೂ ನೋಂದಣಿಯ ಸಮಯದಲ್ಲಿ (at registration) ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ಈ ಪುಟದ ID. |
| $page_hook | `string` | ಈ ಪುಟದ hook ಹೆಸರು. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ನಲ್ಲಿ 228ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
