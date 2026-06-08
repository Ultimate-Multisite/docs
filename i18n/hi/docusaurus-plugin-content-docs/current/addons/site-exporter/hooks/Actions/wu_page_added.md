---
id: wu_page_added
title: क्रिया - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

प्लगइन डेवलपर्स को पेज रजिस्टर होने पर अतिरिक्त काम (actions) चलाने की अनुमति देता है।

`wu_page_load` से अलग, जो केवल तब चलता है जब कोई विशिष्ट पेज देखा जा रहा होता है, यह hook WP Ultimo कोड का उपयोग करके जोड़े गए हर एडमिन पेज के रजिस्ट्रेशन पर चलता है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | इस पेज की ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | इस पेज के लिए बनाया गया hook। |

### Since

- 2.0.0
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) में लाइन 203 पर परिभाषित है।
