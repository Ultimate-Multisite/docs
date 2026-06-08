---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

प्लगइन डेवलपर्स को किसी विशिष्ट पेज पर अतिरिक्त हुक जोड़ने की अनुमति देता है।

उपयोग: डायनामिक हिस्से को एक वैध पेज ID से बदलना होगा, उदाहरण के लिए: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## पैरामीटर्स

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | इस पेज की ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | इस पेज के लिए जनरेट किया गया हुक। |

### कब से उपलब्ध

- 1.8.2
### स्रोत

इसे [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) में लाइन 301 पर परिभाषित किया गया है।
