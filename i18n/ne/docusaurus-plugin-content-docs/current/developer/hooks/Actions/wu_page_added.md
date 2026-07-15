---
id: wu_page_added
title: कार्य - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# कार्य: wu_page_added

प्लगइन विकासकर्ताहरूलाई पृष्ठहरू दर्ता हुँदा थप कुराहरू चलाउन अनुमति दिन्छ।

wu_page_load भन्दा फरक, जुन केवल कुनै विशिष्ट पृष्ठ हेरिँदै गर्दा मात्र चल्छ, यो hook Ultimate Multisite कोड प्रयोग गरेर थपिने हरेक व्यवस्थापक पृष्ठको दर्तामा चल्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string` | यो पृष्ठको ID। |
| $page_hook | `string` | यो पृष्ठको hook नाम। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) मा लाइन 228 मा परिभाषित गरिएको छ।
