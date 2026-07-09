---
id: wu_domain_ses_verified
title: Action - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

जेव्हा SES (Simple Email Service) एखाद्या डोमेनचे DKIM-verified होते, तेव्हा हे ॲक्शन ट्रिगर होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | डोमेन ऑब्जेक्ट. |

### कधीपासून उपलब्ध {#since}

- 2.2.0
### स्रोत {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) मध्ये ४८० व्या ओळीवर परिभाषित केले आहे.
