---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

जब कोई डोमेन किसी साइट का प्राथमिक डोमेन बन जाता है, तो यह एक्शन ट्रिगर होता है।

यह एक्शन तब ट्रिगर होता है जब किसी डोमेन के `primary_domain` फ्लैग को `true` पर सेट किया जाता है, चाहे वह एक नया प्राथमिक डोमेन बनाना हो या किसी मौजूदा डोमेन को प्राथमिक बनाने के लिए अपडेट करना हो।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | वह डोमेन जो प्राथमिक बन गया। |
| $blog_id | `int` | प्रभावित साइट का ब्लॉग ID। |
| $was_new | `bool` | क्या यह एक नया बनाया गया डोमेन है। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) में लाइन 560 पर परिभाषित।
