---
id: wu_post_count
title: ಫಿಲ್ಟರ್ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

ಪ್ಲಗ್ಇನ್ developers-ಗಳು ಕೌಂಟ್ ಟೋಟಲ್ ಅನ್ನು ಬದಲಾಯಿಸಲು ಅನುಮತಿಸುತ್ತದೆ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | ಒಟ್ಟು ಪೋಸ್ಟ್ ಕೌಂಟ್ |
| $post_counts | `object` | `wp_count_posts` ಫಂಕ್ಷನ್‌ನಿಂದ ಬರುವ WordPress ಆಬ್ಜೆಕ್ಟ್ |
| $post_type | `string` | ಪೋಸ್ಟ್ ಟೈಪ್ ಸ್ಲಗ್ |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ನಲ್ಲಿ 136ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ


## Returns {#returns}
ಹೊಸ ಒಟ್ಟು ಸಂಖ್ಯೆ
