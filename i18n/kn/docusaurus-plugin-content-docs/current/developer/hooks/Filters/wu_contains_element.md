---
id: wu_contains_element
title: ಶೇಟರ್ - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

ಡೆವಲಪರ್‌ಗಳಿಗೆ ಆರಂಭಿಕ ಹುಡುಕಾಟದ ಫಲಿತಾಂಶಗಳನ್ನು ಬದಲಾಯಿಸಲು ಇದು ಅನುಮತಿಸುತ್ತದೆ.

ಇದು ಥರ್ಡ್-ಪಾರ್ಟಿ ಬಿಲ್ಡರ್‌ಗಳು ಮತ್ತು ಇತ್ಯಾದಿಗಳಿಗೆ ಉಪಯುಕ್ತವಾಗಿದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | ಅಂಶವು ವಿಷಯದಲ್ಲಿ (content) ಒಳಗೊಂಡಿದ್ದರೆ (contained) `True` ಎಂದು ಇರಬೇಕು. |
| $content | `string` | ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿರುವ ವಿಷಯ (content). |
| $element | `self` | ಪ್ರಸ್ತುತ ಅಂಶ (element). |
| $post | `null\|\WP_Post` | ಪರಿಶೀಲಿಸಲು ಪೋಸ್ಟ್ (post). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) ನಲ್ಲಿ ಲೈನ್ 534 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
