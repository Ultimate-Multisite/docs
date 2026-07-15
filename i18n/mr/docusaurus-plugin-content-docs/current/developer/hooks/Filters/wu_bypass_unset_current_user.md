---
id: wu_bypass_unset_current_user
title: गाळणी - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

डेव्हलपर्सना सध्याच्या वापरकर्त्याला अनसेट (unset) करण्याची प्रक्रिया बायपास करण्याची परवानगी देतो.

जर या फिल्टरमधून `null` व्यतिरिक्त काहीही परत केले (return केले), तर सध्या लॉग इन केलेल्या वापरकर्त्याला अनसेट करण्याची प्रक्रिया बायपास होईल. ही काही विशिष्ट परिस्थितीत उपयुक्त ठरू शकते, उदाहरणार्थ, जेव्हा सब-साईट्स (sub-sites) चा वापर ॲडमिन पॅनेल्स म्हणून केला जात असतो.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | पुढे जाण्यासाठी `null`, बायपास करण्यासाठी इतर काहीही. |
| $current_user | `false\|\WP_User` | सध्याचा वापरकर्ता ऑब्जेक्ट (The current user object). |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns {#returns}
