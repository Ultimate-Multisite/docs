---
id: wu_apc_process_page_content
title: فلٹر - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# فلٹر: wu_apc_process_page_content

ڈویلپرز کو حتمی مواد (final content) میں تبدیلی کرنے کی اجازت دیتا ہے۔

## پیرامیٹرز {#parameters}

| نام | قسم | تفصیل |
|------|------|-------------|
| $content | `string` | تبدیلیوں کے بعد کا مواد۔ |
| $content_before_processing | `string` | تبدیلیوں سے پہلے کا مواد۔ |
| $to_replace | `array` | خالی جگہ رکھنے والے ٹیکسٹ (placeholders) پر مشتمل ایک array۔ |
| $placeholder_count | `int` | ملنے والے جگہ رکھنے والے ٹیکسٹ (placeholders) کی تعداد۔ |

### سے {#since}

- 1.4.0
### ماخذ {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) میں لائن 46 پر بیان کیا گیا ہے۔

## واپسی {#returns}
تبدیلی کے بعد کا مواد۔
