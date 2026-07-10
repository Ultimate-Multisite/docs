---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

ಡೆವಲಪರ್‌ಗಳಿಗೆ ಪ್ರಸ್ತುತ ಬಳಕೆದಾರರನ್ನು (current user) ಅಳಿಸುವ ಕೋಡ್ ಅನ್ನು ಬಿಟ್ಟುಹೋಗಲು (bypass) ಅನುಮತಿಸುತ್ತದೆ.

ಇಲ್ಲಿ `null` ಹೊರತು ಬೇರೆ ಯಾವುದೇ ಮೌಲ್ಯವನ್ನು (value) ಮರಳಿ ನೀಡಿದರೆ, ಲಾಗ್ ಇನ್ ಆಗಿರುವ ಪ್ರಸ್ತುತ ಬಳಕೆದಾರರನ್ನು ಅಳಿಸುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು (unset) ಇದು ಬಿಟ್ಟುಹೋಗುತ್ತದೆ (bypass). ಇದು ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ ಉಪಯುಕ್ತವಾಗಬಹುದು, ಉದಾಹರಣೆಗೆ, ಅಡ್ಮಿನ್ ಪ್ಯಾನೆಲ್‌ಗಳಾಗಿ ಬಳಸಲಾಗುತ್ತಿರುವ サಬ್-ಸೈಟ್‌ಗಳನ್ನು (sub-sites) ನಿರ್ವಹಿಸುವಾಗ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | ಮುಂದುವರಿಯಲು `null` ನೀಡಿ, ಬೇರೇನಾದರೂ ಮೌಲ್ಯವನ್ನು ನೀಡಿದರೆ ಅದನ್ನು ಬಿಟ್ಟುಹೋಗುತ್ತದೆ. |
| $current_user | `false\|\WP_User` | ಪ್ರಸ್ತುತ ಬಳಕೆದಾರರ ಆಬ್ಜೆಕ್ಟ್. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns {#returns}
