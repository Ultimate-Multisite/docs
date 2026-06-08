---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

हे विजेट्स (widgets) नोंदणीकृत झाल्यावर ट्रिगर होते.

हुक नावातील डायनॅमिक भाग, `$this->id`, पेज आयडी (page id) दर्शवतो.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | पेज आयडी. |
| $page_hook | `string` | पेज हुक. |
| $page | `object` | पेज ऑब्जेक्ट. |

### Since

- 2.4.10
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) मध्ये लाइन 755 वर परिभाषित केले आहे.
