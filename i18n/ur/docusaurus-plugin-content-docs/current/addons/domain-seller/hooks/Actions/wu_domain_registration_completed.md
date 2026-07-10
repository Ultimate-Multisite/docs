---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

یہ ایک عمل (Action) ہے جو اس وقت ٹرگر ہوتا ہے جب کوئی ڈومین کامیابی سے رجسٹر ہو جاتا ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | وہ ادائیگی جس نے رجسٹریشن کو ٹرگر کیا ہے۔ |
| $registration_data | `array&lt;string,mixed&gt;` | رجسٹریشن کا میٹا ڈیٹا (جیسے domain_name, provider_id, years, expiry_date وغیرہ)۔ |
| $result | `array&lt;string,mixed&gt;` | رجسٹرار کی طرف سے موصول ہونے والا خام نتیجہ (raw result) array۔ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) at line 1204
