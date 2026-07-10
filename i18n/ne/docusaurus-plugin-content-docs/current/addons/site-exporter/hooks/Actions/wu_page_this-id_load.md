---
id: wu_page_this-id_load
title: 'कार्य - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

प्लगइन विकासकर्ताहरूलाई विशिष्ट पृष्ठमा थप hooks थप्न अनुमति दिन्छ।

प्रयोग: गतिशील भागलाई मान्य page id ले प्रतिस्थापन गर्नुपर्छ, जस्तै add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## मापदण्डहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | यस पृष्ठको ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | यस पृष्ठका लागि सिर्जना गरिएको hook। |

### देखि {#since}

- 1.8.2
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) मा लाइन 301 मा परिभाषित।
