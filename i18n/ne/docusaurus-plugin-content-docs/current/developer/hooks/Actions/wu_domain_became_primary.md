---
id: wu_domain_became_primary
title: कार्य - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# कार्य: wu_domain_became_primary

कुनै डोमेन साइटको प्राथमिक डोमेन हुँदा चल्छ।

यो कार्य तब ट्रिगर हुन्छ जब डोमेनको primary_domain फ्ल्याग true मा सेट हुन्छ, चाहे नयाँ प्राथमिक डोमेन सिर्जना गर्दा होस् वा अवस्थित डोमेनलाई प्राथमिक बनाउन अद्यावधिक गर्दा होस्।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | प्राथमिक बनेको डोमेन। |
| $blog_id | `int` | प्रभावित साइटको blog ID। |
| $was_new | `bool` | यो नयाँ सिर्जना गरिएको डोमेन हो कि होइन। |

### देखि

- 2.0.0
### स्रोत

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) मा लाइन 560 मा परिभाषित गरिएको छ।
