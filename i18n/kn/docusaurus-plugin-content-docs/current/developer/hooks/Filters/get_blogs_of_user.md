---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

ಮೂಲ WP ಫಿಲ್ಟರ್‌ನಂತೆ ಇದನ್ನು ಇಲ್ಲಿ ಪುನರಾವರ್ತಿಸಲಾಗಿದೆ, ಖಚಿತತೆಗಾಗಿ.

ಬಳಕೆದಾರರು ಸೇರಿದ সাইಟ್‌ಗಳ ಪಟ್ಟಿಯನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | ಬಳಕೆದಾರರಿಗೆ ಸೇರಿದ সাইಟ್ ಆಬ್ಜೆಕ್ಟ್‌ಗಳ ಒಂದು 배열. |
| $user_id | `int` | ಬಳಕೆದಾರರ ID. |
| $all | `bool` | ಮರಳಿ ಬರುವ সাইಟ್‌ಗಳ 배열ದಲ್ಲಿ 'deleted', 'archived', ಅಥವಾ 'spam' ಎಂದು ಗುರುತಿಸಲಾದ ಎಲ್ಲಾ সাইಟ್‌ಗಳು ಸೇರಬೇಕೇ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ. ಡೀಫಾಲ್ಟ್: false. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
