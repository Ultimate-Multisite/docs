---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

प्लगइन डेवलपर्स को ज़रूरत पड़ने पर अतिरिक्त हुक्स जोड़ने की अनुमति देता है।

यह `init` तक विलंबित (delay) किया जाना चाहिए क्योंकि SSO एक ऐसी चीज़ है जो `sunrise` पर चलती है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO क्लास। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) में लाइन 285 पर परिभाषित है
