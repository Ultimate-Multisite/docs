---
id: wu_page_load
title: कार्य - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

प्लगइन डेवलपर्स को हमारे पेजों पर अतिरिक्त हुक्स जोड़ने की अनुमति देता है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | इस पेज की ID। |
| $page_hook | `string` | इस पेज का पेज हुक। |
| $admin_page | `self` | पेज का इंस्टेंस। |

### Since

- 1.8.2
- 2.0.4: तीसरा पैरामीटर जोड़ा गया: पेज का इंस्टेंस।
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) में लाइन 318 पर परिभाषित किया गया है।
