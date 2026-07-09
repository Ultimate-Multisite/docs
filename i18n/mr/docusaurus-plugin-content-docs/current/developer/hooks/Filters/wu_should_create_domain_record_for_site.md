---
id: wu_should_create_domain_record_for_site
title: फिल्टर - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# फिल्टर: wu_should_create_domain_record_for_site

नवीन तयार केलेल्या साइटसाठी Ultimate Multisite ने डोमेन रेकॉर्ड तयार करावा की नाही हे फिल्टर करते.

शेअर्ड checkout-form बेस डोमेन, अंतर्गत होस्ट किंवा दुसरे इंटिग्रेशन स्वतंत्रपणे व्यवस्थापित करणार असलेला डोमेन वापरणाऱ्या साइट्ससाठी स्वयंचलित डोमेन-रेकॉर्ड निर्मिती दडपण्यासाठी किंवा पुढे ढकलण्यासाठी हा फिल्टर वापरा.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | डोमेन रेकॉर्ड तयार केला जावा की नाही. |
| $site | `WP_Site` | नवीन तयार केलेला साइट ऑब्जेक्ट. |

### पासून

- 2.13.0

### स्रोत

`inc/functions/domain.php` मध्ये परिभाषित.


## परतावा

डोमेन रेकॉर्ड तयार करायचा की नाही हे दर्शवणारा Boolean.
