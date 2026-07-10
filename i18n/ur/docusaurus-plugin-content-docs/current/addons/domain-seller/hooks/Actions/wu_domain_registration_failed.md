---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

یہ ایک ایکشن ہے جو اس وقت ٹرگر ہوتا ہے جب ڈومین رجسٹریشن کی کوشش ناکام ہو جائے۔

## پیرامیٹرز {#parameters}

| نام | قسم | تفصیل |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | وہ ادائیگی جس کی وجہ سے رجسٹریشن کی کوشش ہوئی تھی۔ |
| $registration_data | `array&lt;string,mixed&gt;` | رجسٹریشن کا میٹا ڈیٹا، جس میں status=failed اور error_message شامل ہوتا ہے۔ |
| $error_message | `string` | رجسٹرار کی طرف سے ملنے والا انسان کے پڑھنے کے قابل (human-readable) غلطی کا پیغام۔ |

### سے {#since}

- 2.0.0
### ماخذ {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) میں لائن 1250 پر ڈیفائن کیا گیا ہے۔
