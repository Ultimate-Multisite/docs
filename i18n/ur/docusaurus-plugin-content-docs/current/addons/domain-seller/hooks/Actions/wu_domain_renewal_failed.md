---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

یہ اس وقت چلتا ہے جب ڈومین کی تجدید (renewal) کی کوشش ناکام ہو جاتی ہے۔

## پیرا میٹرز (Parameters) {#parameters}

| نام (Name) | قسم (Type) | تفصیل (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | وہ ادائیگی جس نے تجدید (renewal) کی کوشش کی تھی۔ |
| $renewal_data | `array&lt;string,mixed&gt;` | تجدید کا میٹا ڈیٹا (جیسے domain_name, years وغیرہ)۔ |
| $error_message | `string` | رجسٹرار کی طرف سے آیا ہوا انسان کے پڑھنے کے قابل غلطی کا پیغام۔ |

### شروع سے (Since) {#since}

- 2.0.0
### ماخذ (Source) {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) میں لائن 630 پر بیان کیا گیا ہے۔
