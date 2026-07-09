---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

प्लगइन डेवलपर्स को पेज को दिखाने (render) से पहले अतिरिक्त सामग्री जोड़ने की अनुमति देता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | इस पेज की आईडी। |
| $page | `object` | पेज ऑब्जेक्ट। |

### कब से {#since}

- 1.8.2
### स्रोत {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) में लाइन 398 पर परिभाषित।
