---
id: wu_domain_registration_completed
title: عمل - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ڊومين ڪاميابي سان رجسٽر ٿيڻ کان پوءِ هلندو آهي.

## پيرا ميٽر

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | اها ادائيگي جنهن رجسٽريشن کي شروع ڪيو. |
| $registration_data | `array&lt;string,mixed&gt;` | رجسٽريشن جو ميٽاڊيٽا (domain_name, provider_id, years, expiry_date, وغيره). |
| $result | `array&lt;string,mixed&gt;` | رجسٽرار طرفان موٽايل خام نتيجي واري array. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ۾ لائن 1204 تي بيان ڪيل.
