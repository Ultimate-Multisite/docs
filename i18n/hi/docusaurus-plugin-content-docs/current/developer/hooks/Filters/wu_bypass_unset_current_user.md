---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# फ़िल्टर: wu_bypass_unset_current_user

डेवलपर्स को वर्तमान उपयोगकर्ता को हटाने (unset) के कोड को बायपास करने की अनुमति देता है।

नल (null) के अलावा कुछ भी रिटर्न करने से लॉग इन किए गए वर्तमान उपयोगकर्ता को हटाने की प्रक्रिया बायपास हो जाएगी। यह कुछ परिदृश्यों में उपयोगी हो सकता है, उदाहरण के लिए, जब आप उन सब-साइट्स से निपट रहे हों जिनका उपयोग एडमिन पैनल के रूप में किया जा रहा हो।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | आगे बढ़ने के लिए नल (Null), और बायपास करने के लिए कुछ भी। |
| $current_user | `false\|\WP_User` | वर्तमान उपयोगकर्ता ऑब्जेक्ट। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) में लाइन 221 पर परिभाषित है।

## Returns {#returns}
