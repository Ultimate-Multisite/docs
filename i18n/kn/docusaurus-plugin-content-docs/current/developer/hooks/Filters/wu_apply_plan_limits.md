---
id: wu_apply_plan_limits
title: ಫಿಲ್ಟರ್ - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

plugin developers ಗಳಿಗೆ ಮಿತಿಗಳನ್ನು (limitations) ನೇರವಾಗಿ ನಿಲ್ಲಿಸಲು (short-circuit) ಅವಕಾಶ ನೀಡುತ್ತದೆ.

ಯಾವುದೇ ಮಿತಿಗಳು ಪ್ರಾರಂಭವಾಗುವ ಮೊದಲು ಯಾವುದೇ ಕೋಡ್ ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ನೀವು ಈ ಫಿಲ್ಟರ್ ಅನ್ನು ಬಳಸಬಹುದು. ನಿಮ್ಮ ಫಿಲ್ಟರ್ ಯಾವುದೇ 'truthy' ಮೌಲ್ಯವನ್ನು ಮರಳಿ ನೀಡಿದರೆ, ಪ್ರಕ್ರಿಯೆಯು ಮುಂದುವರಿಯುತ್ತದೆ. ಆದರೆ, ಅದು ಯಾವುದೇ 'falsy' ಮೌಲ್ಯವನ್ನು ಮರಳಿ ನೀಡಿದರೆ, ಕೋಡ್ ಕಾರ್ಯನಿರ್ವಹಿಸುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ ಮತ್ತು ಕೆಳಗಿನ ಯಾವುದೇ hooks ಕಾರ್ಯನಿರ್ವಹಿಸುವುದಿಲ್ಲ.

### Since

- 1.7.0
### Source

- Defined in [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) at line 52
- Defined in [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) at line 98
## Returns
