---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

ರದ್ದುಗೊಳಿಸಿದ GoCardless ಸದಸ್ಯತ್ವಕ್ಕಾಗಿ ಬಾಕಿ ಇರುವ (pending) ಕೈಬಿಟ್ಟ ಸೈಟ್ ಅನ್ನು ಅಳಿಸುವ ಮೊದಲು ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

ಈ ಫಿಲ್ಟರ್‌ನಲ್ಲಿ `false` ಮರಳಿ ನೀಡಿ (return) ಅಳಿಸುವಿಕೆಯನ್ನು ತಡೆಯಬಹುದು.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ಬಾಕಿ ಇರುವ ಸೈಟ್‌ನ WordPress ಬ್ಲಾಗ್ ಐಡಿ. |
| $membership | `\WP_Ultimo\Models\Membership` | ರದ್ದುಗೊಳಿಸಿದ ಸದಸ್ಯತ್ವ. |
| $old_status | `string` | ರದ್ದುಗೊಳಿಸುವ ಮೊದಲು ಇದ್ದ ಸ್ಥಿತಿ. |

### Since

- 2.0.0
### Source

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ನಲ್ಲಿ ಲೈನ್ 1086 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
