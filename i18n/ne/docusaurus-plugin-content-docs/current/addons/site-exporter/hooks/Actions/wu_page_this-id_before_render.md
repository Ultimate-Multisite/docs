---
id: wu_page_this-id_before_render
title: 'कार्य - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

कुनै विशिष्ट पृष्ठ रेन्डर गर्नुअघि चल्छ।

प्रयोग: गतिशील भागलाई वैध पृष्ठ id ले प्रतिस्थापन गर्नुपर्छ, जस्तै add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | पृष्ठको id। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page इन्स्ट्यान्स। |

### देखि

- 1.8.2
### स्रोत

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) मा पङ्क्ति 368 मा परिभाषित गरिएको छ
