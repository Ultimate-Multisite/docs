---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

यह तब ट्रिगर होता है जब इस पेज के लिए विजेट्स रजिस्टर हो जाते हैं।

हुक नाम का डायनामिक हिस्सा, `$this->id`, पेज की ID को दर्शाता है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | पेज की ID। |
| $page_hook | `string` | पेज का हुक। |
| $page | `object` | पेज ऑब्जेक्ट। |

### Since

- 2.4.10
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) at line 755
