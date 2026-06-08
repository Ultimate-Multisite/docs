---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP ವಿಳಾಸ ಪರಿಶೀಲನೆಯನ್ನು ಕಡ್ಡಾಯಗೊಳಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ.

ಟೋಕನ್‌ಗಳು ವಿಭಿನ್ನ ನೆಟ್‌ವರ್ಕ್‌ಗಳಿಂದ ಕೆಲಸ ಮಾಡಲು ಅನುಮತಿಸಲು ಇದನ್ನು ಫಾಲ್ಸ್ (false) ಎಂದು ಹೊಂದಿಸಿ. ಇದು ಭದ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಆದರೆ ಬಳಕೆಯ ಸುಲಭತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ (ಉದಾಹರಣೆಗೆ, ನೆಟ್‌ವರ್ಕ್‌ಗಳನ್ನು ಬದಲಾಯಿಸುವ ಮೊಬೈಲ್ ಬಳಕೆದಾರರಿಗೆ).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP ವಿಳಾಸ ಹೊಂದಾಣಿಕೆಯನ್ನು (matching) ಕಡ್ಡಾಯಗೊಳಿಸಬೇಕೇ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
