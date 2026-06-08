---
id: wu_post_count_statuses
title: ಫಿಲ್ಟರ್ - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

ಪ್ಲಗ್ಇನ್ developers ಗಳು ಯಾವ ಪೋಸ್ಟ್ ಸ್ಥಿತಿಗಳನ್ನು (post status) ಎಣಿಕೆ ಮಾಡಬೇಕು ಎಂಬುದನ್ನು ಬದಲಾಯಿಸಲು ಇದು ಅನುಮತಿಸುತ್ತದೆ. ಡೀಫಾಲ್ಟ್ ಆಗಿ, ಪ್ರಕಟವಾದ (published) ಮತ್ತು ಖಾಸಗಿ (private) ಪೋಸ್ಟ್‌ಗಳನ್ನು ಎಣಿಕೆ ಮಾಡಲಾಗುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | ಪೋಸ್ಟ್ ಸ್ಥಿತಿಗಳ ಪಟ್ಟಿ (The list of post statuses) |
| $post_type | `string` | ಪೋಸ್ಟ್ ಟೈಪ್ ಸ್ಲಗ್ (The post type slug) |

### Since

- 1.9.1
### Source

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) at line 119


## Returns
ಪೋಸ್ಟ್ ಸ್ಥಿತಿಗಳ ಹೊಸ ಅರೇ (New array of post status)
