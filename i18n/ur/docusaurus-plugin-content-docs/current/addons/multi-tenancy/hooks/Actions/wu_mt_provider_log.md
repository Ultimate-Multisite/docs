---
id: wu_mt_provider_log
title: Action - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log {#action-wumtproviderlog}

جب کوئی پرووائڈر کوئی پیغام ریکارڈ کرتا ہے تو یہ ایکشن چلتا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ریکارڈ کیا جانے والا پیغام۔ |
| $level | `string` | لاگ کی سطح (Log level)۔ |
| $context | `array` | اضافی معلومات یا سیاق و سباق۔ |

### سے {#since}

- 1.0.0
### ماخذ {#source}

یہ [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) میں لائن 400 پر بیان کیا گیا ہے۔
