---
id: wu_page_this-id_after_render
title: 'कार्य - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

विशिष्ट पृष्ठ रेन्डर गरेपछि चल्छ।

प्रयोग: गतिशील भागलाई मान्य पृष्ठ id ले प्रतिस्थापन गर्नुपर्छ, जस्तै add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | पृष्ठको id। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instance। |

### देखि {#since}

- 1.8.2
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) मा पङ्क्ति 394 मा परिभाषित
