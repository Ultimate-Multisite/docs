---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

यह तब ट्रिगर होता है जब डोमेन रजिस्ट्रेशन का प्रयास विफल (fail) हो जाता है।

## पैरामीटर्स {#parameters}

| Name | Type | विवरण |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | वह पेमेंट जिसने रजिस्ट्रेशन को ट्रिगर किया। |
| $registration_data | `array<string,mixed>` | रजिस्ट्रेशन का मेटाडेटा, जिसमें status=failed और error_message शामिल है। |
| $error_message | `string` | रजिस्ट्रार द्वारा दिया गया मानव-पठनीय (human-readable) त्रुटि संदेश। |

### कब से उपलब्ध {#since}

- 2.0.0
### स्रोत {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) में लाइन 1250 पर परिभाषित।
