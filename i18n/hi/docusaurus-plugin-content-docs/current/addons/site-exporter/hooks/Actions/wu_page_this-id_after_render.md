---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

यह किसी विशिष्ट पेज को रेंडर (render) करने के बाद ट्रिगर होता है।

उपयोग: डायनामिक हिस्से को एक वैध पेज ID से बदलना होगा, उदाहरण के लिए: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | पेज की ID। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page का इंस्टेंस। |

### कब से {#since}

- 1.8.2
### स्रोत {#source}

इसे [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) में लाइन 394 पर परिभाषित किया गया है।
