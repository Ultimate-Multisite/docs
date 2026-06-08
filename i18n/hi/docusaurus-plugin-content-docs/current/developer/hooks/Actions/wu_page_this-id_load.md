---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

प्लगइन डेवलपर्स को हमारे पेजों पर अतिरिक्त हुक्स जोड़ने की अनुमति देता है।

## पैरामीटर्स

| Name | Type | विवरण |
|------|------|-------------|
| $id | `string` | इस पेज की ID। |
| $page_hook | `string` | इस पेज का पेज हुक। |
| $admin_page | `self` | पेज का इंस्टेंस। |

### कब से उपलब्ध

- 1.8.2
- 2.0.4: तीसरा पैरामीटर जोड़ा गया: पेज का इंस्टेंस।
### स्रोत

यह [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) में लाइन 332 पर परिभाषित किया गया है।
