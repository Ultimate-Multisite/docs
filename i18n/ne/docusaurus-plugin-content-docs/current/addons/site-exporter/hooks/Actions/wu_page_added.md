---
id: wu_page_added
title: कार्य - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

पृष्ठहरू दर्ता हुँदा प्लगइन विकासकर्ताहरूलाई थप कुराहरू चलाउन अनुमति दिन्छ।

wu_page_load भन्दा फरक, जुन कुनै विशिष्ट पृष्ठ हेरिँदा मात्र चल्छ, यो हुक WP Ultimo कोड प्रयोग गरेर थपिँदै गरेको प्रत्येक प्रशासनिक पृष्ठका लागि दर्ता हुँदा चल्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | यस पृष्ठको ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | यस पृष्ठका लागि उत्पन्न गरिएको हुक। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) मा पङ्क्ति 203 मा परिभाषित गरिएको छ।
