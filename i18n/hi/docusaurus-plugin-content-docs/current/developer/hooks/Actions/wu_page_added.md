---
id: wu_page_added
title: क्रिया - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

प्लगइन डेवलपर्स को पेज रजिस्टर होने पर अतिरिक्त कार्य चलाने की अनुमति देता है।

`wu_page_load` से अलग, जो केवल एक विशिष्ट पेज को देखने पर चलता है, यह हुक Ultimate Multisite कोड का उपयोग करके जोड़े गए हर एडमिन पेज के रजिस्ट्रेशन पर चलता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | इस पेज की ID। |
| $page_hook | `string` | इस पेज का हुक नाम। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
