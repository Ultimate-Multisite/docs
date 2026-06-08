---
id: wu_get_site_domain_and_path
title: فلٹر - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

ڈویلپرز کو ڈومین/پاتھ کے جوڑوں میں تبدیلی کرنے کی اجازت دیتا ہے۔

یہ کئی چیزوں کے لیے کارآمد ہو سکتا ہے، جیسے کہ کسی قسم کا اسٹیجنگ حل (staging solution) نافذ کرنا، مختلف سرورز استعمال کرنا، وغیرہ۔

## پیرامیٹرز (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | وہ موجودہ آبجیکٹ جس میں ڈومین اور پاتھ کی کلیدیں (keys) موجود ہیں۔ |
| $path_or_subdomain | `string` | اصل پاتھ/سب ڈومین جو فنکشن کو پاس کیا گیا تھا۔ |

### سے (Since)

- 2.0.0
### ماخذ (Source)

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## واپسی (Returns)
ایک آبجیکٹ جو ڈومین اور پاتھ کی کلیدیں (keys) رکھتا ہے۔
