---
id: wu_domain_transfer_completed
title: कृती - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

डोमेन ट्रान्सफर पूर्ण झाल्यावर ही ॲक्शन (Action) ट्रिगर होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | डोमेन ऑब्जेक्ट (domain object). |
| $transfer_data | `array` | ट्रान्सफर पूर्ण झाल्याचा डेटा (Transfer completion data). |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) या फाईलमध्ये लाइन ६९० वर परिभाषित केले आहे.
