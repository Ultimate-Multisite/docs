---
id: wu_domain_became_primary
title: कृती - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

जेव्हा एखादे डोमेन साइटचे प्राथमिक डोमेन बनते, तेव्हा हे ट्रिगर होते.

जेव्हा एखाद्या डोमेनचा `primary_domain` फ्लॅग `true` सेट केला जातो, तेव्हा ही ॲक्शन ट्रिगर होते. हे नवीन प्राथमिक डोमेन तयार करताना किंवा विद्यमान डोमेनला प्राथमिक बनवताना होऊ शकते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | जे डोमेन प्राथमिक झाले. |
| $blog_id | `int` | प्रभावित साइटचा ब्लॉग ID. |
| $was_new | `bool` | हे डोमेन नवीन तयार केले आहे की नाही. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) मध्ये लाइन 560 वर परिभाषित केले आहे.
