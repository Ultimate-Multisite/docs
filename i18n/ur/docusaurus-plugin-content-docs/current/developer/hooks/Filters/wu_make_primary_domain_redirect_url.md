---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ڈومین کو پرائمری بنانے کے بعد ریڈائریکٹ URL کو فیلٹر کرتا ہے۔

یہ ڈویلپرز کو اجازت دیتا ہے کہ وہ کسٹمائز کریں کہ صارف کو کہاں ریڈائریکٹ کیا جائے گا جب ڈومین کو کامیابی سے پرائمری سیٹ کیا جائے۔ ڈیفالٹ طور پر، یہ مین سائٹ کے موجودہ URL پر، یا اس سائٹ کے ایڈمن URL پر ریڈائریکٹ ہوتا ہے جسے تبدیل کیا جا رہا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ڈیفالٹ ریڈائریکٹ URL۔ یا تو موجودہ URL (اگر مین سائٹ ہے) یا موجودہ سائٹ کا ایڈمن URL۔ |
| $current_site | `int` | اس سائٹ کی ID جس کا ڈومین پرائمری بنایا جا رہا ہے۔ |
| $domain | `\Domain` | وہ ڈومین آبجیکٹ جسے پرائمری بنایا گیا۔ |
| $old_primary_domains | `array` | ان ڈومینز کی IDs کا ایک ارے جو پہلے پرائمری تھے۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) میں لائن 639 پر ڈیفائن کیا گیا ہے۔


## Returns {#returns}
فیلٹر کیا گیا ریڈائریکٹ URL۔
