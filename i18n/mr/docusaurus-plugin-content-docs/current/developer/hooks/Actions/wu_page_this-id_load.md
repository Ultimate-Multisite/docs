---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

प्लगइन डेव्हलपर्सना आमच्या पानांमध्ये (pages) अतिरिक्त हुक्स (hooks) जोडण्याची परवानगी देण्यासाठी.

## पॅरामीटर्स (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | या पानाचा ID. |
| $page_hook | `string` | या पानाचा पेज हुक. |
| $admin_page | `self` | पेज इन्स्टन्स. |

### Since {#since}

- 1.8.2
- 2.0.4: तिसरा पॅरामीटर जोडला गेला: पेज इन्स्टन्स.
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) मध्ये लाइन 332 वर परिभाषित केले आहे.
